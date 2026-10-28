<?php
/**
 * Rebuilds the website on Netlify whenever published content changes.
 *
 * The build hook URL is read from wp-config.php (YAPD_NETLIFY_BUILD_HOOK) or,
 * failing that, from Settings > YAPD4Africa site. It is never exposed by the
 * REST API: anyone who knows it can trigger builds.
 */

defined( 'ABSPATH' ) || exit;

/** Seconds during which further changes do not trigger another build. */
const YAPD_BUILD_DEBOUNCE = 15;

/** Content types whose changes require a rebuild. */
const YAPD_WATCHED_TYPES = array( 'post', 'yapd_project', 'yapd_team', 'yapd_report', 'yapd_partner' );

function yapd_build_hook_url(): string {
	if ( defined( 'YAPD_NETLIFY_BUILD_HOOK' ) && YAPD_NETLIFY_BUILD_HOOK ) {
		return (string) YAPD_NETLIFY_BUILD_HOOK;
	}
	return (string) ( yapd_get_settings()['build_hook'] ?? '' );
}

/**
 * Asks Netlify for a new build. Returns false when no hook is configured or
 * a build was already requested a few seconds ago.
 */
function yapd_trigger_build( string $reason = '' ): bool {
	$hook = yapd_build_hook_url();
	if ( ! $hook ) {
		return false;
	}
	// The block editor saves a post several times in a row: send one request only.
	if ( get_transient( 'yapd_build_pending' ) ) {
		return false;
	}
	set_transient( 'yapd_build_pending', 1, YAPD_BUILD_DEBOUNCE );

	wp_remote_post(
		add_query_arg( 'trigger_title', rawurlencode( 'WordPress: ' . $reason ), $hook ),
		array(
			'blocking' => false,
			'timeout'  => 5,
		)
	);
	update_option(
		'yapd_last_build',
		array(
			'time'   => time(),
			'reason' => $reason,
		),
		false
	);
	return true;
}

// Publish, update of published content, unpublish, trash.
add_action(
	'transition_post_status',
	static function ( string $new_status, string $old_status, WP_Post $post ): void {
		if ( wp_is_post_revision( $post ) || wp_is_post_autosave( $post ) ) {
			return;
		}
		if ( ! in_array( $post->post_type, YAPD_WATCHED_TYPES, true ) ) {
			return;
		}
		if ( 'publish' === $new_status || 'publish' === $old_status ) {
			yapd_trigger_build( "{$post->post_type} \"{$post->post_title}\" ({$old_status} → {$new_status})" );
		}
	},
	10,
	3
);

// ACF fields edited alone (no post status change). Debounced with the post save:
// the build starts well after both are stored.
add_action(
	'acf/save_post',
	static function ( $post_id ): void {
		if ( ! is_numeric( $post_id ) ) {
			return;
		}
		$post = get_post( (int) $post_id );
		if ( $post && 'publish' === $post->post_status && in_array( $post->post_type, YAPD_WATCHED_TYPES, true ) ) {
			yapd_trigger_build( "{$post->post_type} \"{$post->post_title}\" updated" );
		}
	},
	20
);

// Permanent deletion of published content.
add_action(
	'before_delete_post',
	static function ( int $post_id, WP_Post $post ): void {
		if ( 'publish' === $post->post_status && in_array( $post->post_type, YAPD_WATCHED_TYPES, true ) ) {
			yapd_trigger_build( "{$post->post_type} \"{$post->post_title}\" deleted" );
		}
	},
	10,
	2
);

// Image replaced or alt text edited in the media library.
add_action(
	'edit_attachment',
	static function (): void {
		yapd_trigger_build( 'media updated' );
	}
);

// Site settings saved (contacts, impact figures, donation link…).
add_action(
	'update_option_' . YAPD_OPTION,
	static function (): void {
		delete_transient( 'yapd_build_pending' );
		yapd_trigger_build( 'site settings updated' );
	}
);

// Manual rebuild (admin bar button and dashboard widget).
add_action(
	'admin_post_yapd_rebuild',
	static function (): void {
		if ( ! current_user_can( 'publish_posts' ) ) {
			wp_die( 'Not allowed.', 403 );
		}
		check_admin_referer( 'yapd_rebuild' );
		delete_transient( 'yapd_build_pending' );
		$sent = yapd_trigger_build( 'manual rebuild by ' . wp_get_current_user()->user_login );
		wp_safe_redirect( add_query_arg( 'yapd_rebuild', $sent ? 'sent' : 'missing', wp_get_referer() ?: admin_url() ) );
		exit;
	}
);

function yapd_rebuild_url(): string {
	return wp_nonce_url( admin_url( 'admin-post.php?action=yapd_rebuild' ), 'yapd_rebuild' );
}
