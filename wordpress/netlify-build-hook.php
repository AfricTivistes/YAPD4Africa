<?php
/**
 * Plugin Name: YAPD4Africa – Netlify build hook
 * Description: Rebuilds yapd4africa.org on Netlify whenever published content changes.
 * Version:     1.0.0
 * Author:      AfricTivistes
 * License:     GPL-2.0-or-later
 *
 * Installation (must-use plugin, cannot be deactivated by mistake):
 *   1. Copy this file to wp-content/mu-plugins/netlify-build-hook.php
 *   2. In wp-config.php, above "That's all, stop editing!", add:
 *        define( 'YAPD_NETLIFY_BUILD_HOOK', 'https://api.netlify.com/build_hooks/XXXXXXXX' );
 *
 * The hook URL stays out of the database and out of git: anyone who knows it
 * can trigger builds.
 */

defined( 'ABSPATH' ) || exit;

/** Seconds during which further changes do not trigger another build. */
const YAPD_NETLIFY_DEBOUNCE = 15;

/**
 * Content types whose changes require a rebuild. The yapd_* types come from
 * the yapd-headless plugin, if installed.
 */
function yapd_netlify_watched_types(): array {
	return array( 'post', 'yapd_project', 'yapd_team', 'yapd_report', 'yapd_partner' );
}

function yapd_netlify_trigger_build( string $reason = '' ): void {
	if ( ! defined( 'YAPD_NETLIFY_BUILD_HOOK' ) || ! YAPD_NETLIFY_BUILD_HOOK ) {
		return;
	}
	// The block editor saves a post several times in a row: send one request only.
	if ( get_transient( 'yapd_netlify_build_pending' ) ) {
		return;
	}
	set_transient( 'yapd_netlify_build_pending', 1, YAPD_NETLIFY_DEBOUNCE );

	wp_remote_post(
		YAPD_NETLIFY_BUILD_HOOK . '?trigger_title=' . rawurlencode( 'WordPress: ' . $reason ),
		array(
			'blocking' => false,
			'timeout'  => 5,
		)
	);
}

// Publish, update of published content, unpublish, trash.
add_action(
	'transition_post_status',
	static function ( string $new_status, string $old_status, WP_Post $post ): void {
		if ( wp_is_post_revision( $post ) || wp_is_post_autosave( $post ) ) {
			return;
		}
		if ( ! in_array( $post->post_type, yapd_netlify_watched_types(), true ) ) {
			return;
		}
		if ( 'publish' === $new_status || 'publish' === $old_status ) {
			yapd_netlify_trigger_build( "{$post->post_type} \"{$post->post_title}\" ({$old_status} → {$new_status})" );
		}
	},
	10,
	3
);

// Permanent deletion of published content.
add_action(
	'before_delete_post',
	static function ( int $post_id, WP_Post $post ): void {
		if ( 'publish' === $post->post_status && in_array( $post->post_type, yapd_netlify_watched_types(), true ) ) {
			yapd_netlify_trigger_build( "{$post->post_type} \"{$post->post_title}\" deleted" );
		}
	},
	10,
	2
);

// Site settings page of the yapd-headless plugin (contacts, impact figures…).
add_action(
	'update_option_yapd_settings',
	static function (): void {
		yapd_netlify_trigger_build( 'site settings updated' );
	}
);

// Image replaced or alt text edited in the media library.
add_action(
	'edit_attachment',
	static function (): void {
		yapd_netlify_trigger_build( 'media updated' );
	}
);

// Manual button in the admin bar: "Rebuild website".
add_action(
	'admin_bar_menu',
	static function ( WP_Admin_Bar $bar ): void {
		if ( ! current_user_can( 'publish_posts' ) || ! defined( 'YAPD_NETLIFY_BUILD_HOOK' ) ) {
			return;
		}
		$bar->add_node(
			array(
				'id'    => 'yapd-netlify-rebuild',
				'title' => 'Rebuild website',
				'href'  => wp_nonce_url( admin_url( 'admin-post.php?action=yapd_netlify_rebuild' ), 'yapd_netlify_rebuild' ),
			)
		);
	},
	100
);

add_action(
	'admin_post_yapd_netlify_rebuild',
	static function (): void {
		if ( ! current_user_can( 'publish_posts' ) ) {
			wp_die( 'Not allowed.', 403 );
		}
		check_admin_referer( 'yapd_netlify_rebuild' );
		delete_transient( 'yapd_netlify_build_pending' );
		yapd_netlify_trigger_build( 'manual rebuild by ' . wp_get_current_user()->user_login );
		wp_safe_redirect( add_query_arg( 'yapd_rebuild', '1', wp_get_referer() ?: admin_url() ) );
		exit;
	}
);

add_action(
	'admin_notices',
	static function (): void {
		if ( isset( $_GET['yapd_rebuild'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			echo '<div class="notice notice-success is-dismissible"><p>The website is being rebuilt. Changes will be live in about 2 minutes.</p></div>';
		}
	}
);
