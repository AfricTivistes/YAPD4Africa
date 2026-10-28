<?php
/**
 * YAPD4Africa Headless theme.
 *
 * WordPress is only the back office of yapd4africa.org: the public website is
 * built by Astro (Netlify) from the REST API.
 */

defined( 'ABSPATH' ) || exit;

/** Public website. Can be overridden in wp-config.php. */
if ( ! defined( 'YAPD_FRONTEND_URL' ) ) {
	define( 'YAPD_FRONTEND_URL', 'https://yapd4africa.org' );
}

require_once __DIR__ . '/inc/content-model.php';
require_once __DIR__ . '/inc/build-hook.php';
require_once __DIR__ . '/inc/headless.php';
require_once __DIR__ . '/inc/admin.php';

// New post types need fresh rewrite rules, otherwise their URLs return 404.
add_action(
	'after_switch_theme',
	static function (): void {
		yapd_register_post_types();
		flush_rewrite_rules();
	}
);

add_action(
	'after_setup_theme',
	static function (): void {
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'editor-styles' );
		add_theme_support( 'responsive-embeds' );
	}
);
