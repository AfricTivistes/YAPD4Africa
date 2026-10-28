<?php
/**
 * Headless behaviour: visitors of cms.yapd4africa.org are sent to the matching
 * page of the public website, so search engines index only yapd4africa.org.
 * The admin, the REST API, logins and draft previews keep working.
 */

defined( 'ABSPATH' ) || exit;

/** Public URL of a piece of content (the website home when it has no page of its own). */
function yapd_frontend_url( ?WP_Post $post = null ): string {
	$base = untrailingslashit( YAPD_FRONTEND_URL );
	if ( ! $post ) {
		return $base . '/';
	}
	switch ( $post->post_type ) {
		case 'post':
			return "{$base}/news/{$post->post_name}";
		case 'yapd_project':
			return "{$base}/what-we-do/{$post->post_name}";
		case 'yapd_report':
			return "{$base}/reports";
		case 'yapd_team':
			return "{$base}/who-are-we";
		case 'page':
			// Legacy pages of the previous site, mapped to their equivalent.
			$pages = array(
				'what-we-do' => 'what-we-do',
				'who-are-we' => 'who-are-we',
				'report'     => 'reports',
				'reports'    => 'reports',
				'news'       => 'news',
				'contact'    => 'contact',
				'support-us' => 'support-us',
			);
			return isset( $pages[ $post->post_name ] ) ? "{$base}/{$pages[ $post->post_name ]}" : "{$base}/";
		default:
			return "{$base}/";
	}
}

add_action(
	'template_redirect',
	static function (): void {
		// Editors previewing a draft see the minimal preview template (index.php).
		if ( is_preview() && current_user_can( 'edit_posts' ) ) {
			return;
		}

		$base = untrailingslashit( YAPD_FRONTEND_URL );
		if ( is_front_page() ) {
			$target = "{$base}/";
		} elseif ( is_singular() ) {
			$target = yapd_frontend_url( get_queried_object() );
		} elseif ( is_home() || is_category() || is_tag() || is_author() || is_date() || is_feed() ) {
			$target = "{$base}/news";
		} else {
			$target = "{$base}/";
		}

		wp_redirect( $target, 301, 'YAPD4Africa' ); // phpcs:ignore WordPress.Security.SafeRedirect.wp_redirect_wp_redirect -- external site.
		exit;
	},
	1
);

// Anything still rendered on this domain (previews) must never be indexed.
add_filter(
	'wp_robots',
	static function ( array $robots ): array {
		return array(
			'noindex'  => true,
			'nofollow' => true,
		);
	}
);
add_action(
	'send_headers',
	static function (): void {
		if ( ! is_admin() ) {
			header( 'X-Robots-Tag: noindex, nofollow', true );
		}
	}
);

// "View" links in the admin go straight to the public page.
add_filter(
	'post_row_actions',
	static function ( array $actions, WP_Post $post ): array {
		if ( 'publish' === $post->post_status && isset( $actions['view'] ) ) {
			$actions['view'] = sprintf(
				'<a href="%s" target="_blank" rel="noopener">%s</a>',
				esc_url( yapd_frontend_url( $post ) ),
				esc_html__( 'View on website', 'yapd4africa-headless' )
			);
		}
		return $actions;
	},
	10,
	2
);

// The website has no comments: close them everywhere and hide the UI.
add_filter( 'comments_open', '__return_false', 20 );
add_filter( 'pings_open', '__return_false', 20 );
add_filter( 'comments_array', '__return_empty_array', 10 );
add_action(
	'init',
	static function (): void {
		foreach ( array( 'post', 'page' ) as $type ) {
			remove_post_type_support( $type, 'comments' );
			remove_post_type_support( $type, 'trackbacks' );
		}
	},
	100
);
add_action(
	'admin_menu',
	static function (): void {
		remove_menu_page( 'edit-comments.php' );
	}
);
add_action(
	'admin_bar_menu',
	static function ( WP_Admin_Bar $bar ): void {
		$bar->remove_node( 'comments' );
	},
	999
);
