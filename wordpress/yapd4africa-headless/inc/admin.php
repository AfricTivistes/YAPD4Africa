<?php
/**
 * Admin experience for the YAPD4Africa team: dashboard widget, rebuild
 * button and setup notices.
 */

defined( 'ABSPATH' ) || exit;

// "Rebuild website" in the admin bar.
add_action(
	'admin_bar_menu',
	static function ( WP_Admin_Bar $bar ): void {
		if ( ! current_user_can( 'publish_posts' ) ) {
			return;
		}
		$bar->add_node(
			array(
				'id'    => 'yapd-website',
				'title' => '<span class="ab-icon dashicons dashicons-admin-site-alt3" style="top:2px"></span>' . esc_html__( 'Website', 'yapd4africa-headless' ),
				'href'  => YAPD_FRONTEND_URL,
				'meta'  => array( 'target' => '_blank' ),
			)
		);
		if ( yapd_build_hook_url() ) {
			$bar->add_node(
				array(
					'parent' => 'yapd-website',
					'id'     => 'yapd-rebuild',
					'title'  => esc_html__( 'Rebuild website now', 'yapd4africa-headless' ),
					'href'   => yapd_rebuild_url(),
				)
			);
		}
	},
	80
);

// Dashboard widget, shown first.
add_action(
	'wp_dashboard_setup',
	static function (): void {
		wp_add_dashboard_widget( 'yapd_website', 'YAPD4Africa website', 'yapd_render_dashboard_widget' );

		global $wp_meta_boxes;
		$normal = $wp_meta_boxes['dashboard']['normal']['core'] ?? array();
		$widget = array( 'yapd_website' => $normal['yapd_website'] ?? null );
		unset( $normal['yapd_website'] );
		$wp_meta_boxes['dashboard']['normal']['core'] = array_filter( array_merge( $widget, $normal ) ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	}
);

function yapd_render_dashboard_widget(): void {
	$last = get_option( 'yapd_last_build' );
	$hook = yapd_build_hook_url();
	?>
	<p>
		<?php esc_html_e( 'This WordPress is the back office of', 'yapd4africa-headless' ); ?>
		<a href="<?php echo esc_url( YAPD_FRONTEND_URL ); ?>" target="_blank" rel="noopener"><strong><?php echo esc_html( wp_parse_url( YAPD_FRONTEND_URL, PHP_URL_HOST ) ); ?></strong></a>.
		<?php esc_html_e( 'Published changes appear on the website about 2 minutes later.', 'yapd4africa-headless' ); ?>
	</p>

	<?php if ( ! $hook ) : ?>
		<p style="color:#b32d2e">
			<strong><?php esc_html_e( 'Automatic updates are off:', 'yapd4africa-headless' ); ?></strong>
			<?php esc_html_e( 'add the Netlify build hook URL in', 'yapd4africa-headless' ); ?>
			<a href="<?php echo esc_url( admin_url( 'options-general.php?page=yapd-settings#build_hook' ) ); ?>"><?php esc_html_e( 'Settings › YAPD4Africa site', 'yapd4africa-headless' ); ?></a>.
		</p>
	<?php else : ?>
		<p>
			<?php if ( is_array( $last ) && ! empty( $last['time'] ) ) : ?>
				<?php
				printf(
					/* translators: 1: time ago, 2: reason */
					esc_html__( 'Last update requested %1$s ago (%2$s).', 'yapd4africa-headless' ),
					esc_html( human_time_diff( (int) $last['time'] ) ),
					esc_html( $last['reason'] ?? '' )
				);
				?>
			<?php else : ?>
				<?php esc_html_e( 'No update requested yet.', 'yapd4africa-headless' ); ?>
			<?php endif; ?>
		</p>
		<p><a class="button button-primary" href="<?php echo esc_url( yapd_rebuild_url() ); ?>"><?php esc_html_e( 'Rebuild website now', 'yapd4africa-headless' ); ?></a></p>
	<?php endif; ?>

	<hr>
	<p><strong><?php esc_html_e( 'Quick actions', 'yapd4africa-headless' ); ?></strong></p>
	<ul>
		<li><a href="<?php echo esc_url( admin_url( 'post-new.php' ) ); ?>"><?php esc_html_e( 'Write a news article', 'yapd4africa-headless' ); ?></a></li>
		<li><a href="<?php echo esc_url( admin_url( 'post-new.php?post_type=yapd_report' ) ); ?>"><?php esc_html_e( 'Publish a report', 'yapd4africa-headless' ); ?></a></li>
		<li><a href="<?php echo esc_url( admin_url( 'post-new.php?post_type=yapd_project' ) ); ?>"><?php esc_html_e( 'Add a project', 'yapd4africa-headless' ); ?></a></li>
		<li><a href="<?php echo esc_url( admin_url( 'post-new.php?post_type=yapd_team' ) ); ?>"><?php esc_html_e( 'Add a team member', 'yapd4africa-headless' ); ?></a></li>
		<li><a href="<?php echo esc_url( admin_url( 'options-general.php?page=yapd-settings' ) ); ?>"><?php esc_html_e( 'Contacts, impact figures and donation link', 'yapd4africa-headless' ); ?></a></li>
	</ul>
	<p class="description"><?php esc_html_e( 'Tip: always set a featured image and an excerpt on news articles.', 'yapd4africa-headless' ); ?></p>
	<?php
}

// Setup and feedback notices.
add_action(
	'admin_notices',
	static function (): void {
		if ( ! function_exists( 'acf_add_local_field_group' ) && current_user_can( 'install_plugins' ) ) {
			printf(
				'<div class="notice notice-warning"><p><strong>YAPD4Africa:</strong> %s <a href="%s">%s</a></p></div>',
				esc_html__( 'install and activate the free Advanced Custom Fields plugin to edit project, team, report and partner details.', 'yapd4africa-headless' ),
				esc_url( admin_url( 'plugin-install.php?s=advanced-custom-fields&tab=search&type=term' ) ),
				esc_html__( 'Install ACF', 'yapd4africa-headless' )
			);
		}

		$result = sanitize_key( wp_unslash( $_GET['yapd_rebuild'] ?? '' ) ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if ( 'sent' === $result ) {
			echo '<div class="notice notice-success is-dismissible"><p>' . esc_html__( 'The website is being rebuilt. Changes will be live in about 2 minutes.', 'yapd4africa-headless' ) . '</p></div>';
		} elseif ( 'missing' === $result ) {
			echo '<div class="notice notice-error is-dismissible"><p>' . esc_html__( 'No build hook configured, or a rebuild was requested a few seconds ago.', 'yapd4africa-headless' ) . '</p></div>';
		}
	}
);

// Editors don't need theme customization tools for a headless back office.
add_action(
	'admin_menu',
	static function (): void {
		remove_submenu_page( 'themes.php', 'customize.php?return=' . rawurlencode( wp_unslash( $_SERVER['REQUEST_URI'] ?? '' ) ) ); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
	},
	999
);

add_filter(
	'admin_footer_text',
	static function (): string {
		return sprintf(
			/* translators: %s: website link */
			esc_html__( 'YAPD4Africa back office · public website: %s', 'yapd4africa-headless' ),
			'<a href="' . esc_url( YAPD_FRONTEND_URL ) . '" target="_blank" rel="noopener">' . esc_html( wp_parse_url( YAPD_FRONTEND_URL, PHP_URL_HOST ) ) . '</a>'
		);
	}
);
