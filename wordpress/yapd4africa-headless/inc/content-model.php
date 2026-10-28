<?php
/**
 * Content model read by the Astro front-end through the REST API:
 * custom post types, ACF field groups, extra REST data and the
 * Settings > YAPD4Africa site page.
 *
 * Field names must match src/lib/content.ts in the website repository.
 */

defined( 'ABSPATH' ) || exit;

const YAPD_OPTION = 'yapd_settings';
const YAPD_IMPACT_ROWS = 6;

/* -------------------------------------------------------------------------
 * Custom post types
 * ---------------------------------------------------------------------- */

add_action( 'init', 'yapd_register_post_types' );

function yapd_register_post_types(): void {
	$types = array(
		'yapd_project' => array(
			'rest_base' => 'projects',
			'singular'  => 'Project',
			'plural'    => 'Projects',
			'icon'      => 'dashicons-portfolio',
			'supports'  => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes' ),
			'slug'      => 'what-we-do',
		),
		'yapd_team'    => array(
			'rest_base' => 'team',
			'singular'  => 'Team member',
			'plural'    => 'Team & Trustees',
			'icon'      => 'dashicons-groups',
			'supports'  => array( 'title', 'thumbnail', 'page-attributes' ),
			'slug'      => 'team',
		),
		'yapd_report'  => array(
			'rest_base' => 'reports',
			'singular'  => 'Report',
			'plural'    => 'Reports',
			'icon'      => 'dashicons-media-document',
			'supports'  => array( 'title', 'thumbnail' ),
			'slug'      => 'reports',
		),
		'yapd_partner' => array(
			'rest_base' => 'partners',
			'singular'  => 'Partner',
			'plural'    => 'Partners',
			'icon'      => 'dashicons-heart',
			'supports'  => array( 'title', 'thumbnail', 'page-attributes' ),
			'slug'      => 'partners',
		),
	);

	foreach ( $types as $type => $args ) {
		register_post_type(
			$type,
			array(
				'labels'              => array(
					'name'               => $args['plural'],
					'singular_name'      => $args['singular'],
					'add_new_item'       => 'Add ' . strtolower( $args['singular'] ),
					'edit_item'          => 'Edit ' . strtolower( $args['singular'] ),
					'featured_image'     => 'yapd_partner' === $type ? 'Logo' : 'Image',
					'set_featured_image' => 'yapd_partner' === $type ? 'Set logo' : 'Set image',
				),
				'public'              => true,
				'exclude_from_search' => true,
				'has_archive'         => false,
				'show_in_rest'        => true,
				'rest_base'           => $args['rest_base'],
				'menu_icon'           => $args['icon'],
				'supports'            => $args['supports'],
				'rewrite'             => array( 'slug' => $args['slug'] ),
			)
		);
	}
}

/* -------------------------------------------------------------------------
 * ACF field groups (works with the free version of ACF)
 * ---------------------------------------------------------------------- */

add_action( 'acf/include_fields', 'yapd_register_fields' );

function yapd_register_fields(): void {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	$group = static function ( string $key, string $title, string $post_type, array $fields ): void {
		acf_add_local_field_group(
			array(
				'key'          => "group_yapd_{$key}",
				'title'        => $title,
				'fields'       => array_map(
					static fn( array $field ) => $field + array( 'key' => "field_yapd_{$key}_{$field['name']}" ),
					$fields
				),
				'location'     => array( array( array( 'param' => 'post_type', 'operator' => '==', 'value' => $post_type ) ) ),
				'position'     => 'acf_after_title',
				'show_in_rest' => 1,
			)
		);
	};

	$group(
		'project',
		'Project details',
		'yapd_project',
		array(
			array(
				'name'          => 'category',
				'label'         => 'Category',
				'type'          => 'select',
				'choices'       => array(
					'homegrown' => 'Homegrown initiative',
					'past'      => 'Other / past project',
				),
				'default_value' => 'homegrown',
				'required'      => 1,
			),
			array(
				'name'         => 'impact',
				'label'        => 'Impact',
				'type'         => 'textarea',
				'rows'         => 3,
				'instructions' => 'One or two sentences shown in the "Impact" box.',
			),
			array(
				'name'         => 'tags',
				'label'        => 'Topics',
				'type'         => 'text',
				'instructions' => 'Comma-separated, e.g. "Civic Education, Nigeria".',
			),
			array(
				'name'         => 'period',
				'label'        => 'Period',
				'type'         => 'text',
				'instructions' => 'Optional, e.g. "2025" or "Since 2019".',
			),
			array(
				'name'         => 'key_figures',
				'label'        => 'Key figures',
				'type'         => 'textarea',
				'rows'         => 4,
				'instructions' => 'One per line, value and label separated by "|", e.g. "7,000+ | residents with clean water".',
			),
			array(
				'name'         => 'supporters',
				'label'        => 'Supported by',
				'type'         => 'text',
				'instructions' => 'Comma-separated funders and partners.',
			),
		)
	);

	$group(
		'team',
		'Team member details',
		'yapd_team',
		array(
			array(
				'name'     => 'role',
				'label'    => 'Role / title',
				'type'     => 'text',
				'required' => 1,
			),
			array(
				'name'          => 'group',
				'label'         => 'Group',
				'type'          => 'select',
				'choices'       => array(
					'staff'   => 'Team (staff)',
					'trustee' => 'Board of Trustees',
				),
				'default_value' => 'staff',
				'required'      => 1,
			),
			array(
				'name'  => 'bio',
				'label' => 'Short bio',
				'type'  => 'textarea',
				'rows'  => 3,
			),
		)
	);

	$group(
		'report',
		'Report details',
		'yapd_report',
		array(
			array(
				'name'          => 'report_type',
				'label'         => 'Type',
				'type'          => 'select',
				'choices'       => array(
					'annual'   => 'Annual / impact report',
					'project'  => 'Project report',
					'research' => 'Research publication',
				),
				'default_value' => 'project',
				'required'      => 1,
			),
			array(
				'name'           => 'report_date',
				'label'          => 'Publication date',
				'type'           => 'date_picker',
				'display_format' => 'd/m/Y',
				'return_format'  => 'Y-m-d',
				'required'       => 1,
			),
			array(
				'name'  => 'description',
				'label' => 'Short description',
				'type'  => 'textarea',
				'rows'  => 3,
			),
			array(
				'name'          => 'file',
				'label'         => 'PDF file',
				'type'          => 'file',
				'return_format' => 'url',
				'mime_types'    => 'pdf',
				'required'      => 1,
			),
			array(
				'name'          => 'project',
				'label'         => 'Related project',
				'type'          => 'post_object',
				'post_type'     => array( 'yapd_project' ),
				'return_format' => 'id',
				'allow_null'    => 1,
				'instructions'  => 'Optional. The report is also listed on this project page.',
			),
		)
	);

	$group(
		'partner',
		'Partner details',
		'yapd_partner',
		array(
			array(
				'name'  => 'website',
				'label' => 'Website',
				'type'  => 'url',
			),
		)
	);

	$group(
		'post',
		'External article',
		'post',
		array(
			array(
				'name'         => 'external_url',
				'label'        => 'External article URL',
				'type'         => 'url',
				'instructions' => 'Optional. When set, the news card links to this article instead of a page on the website.',
			),
		)
	);
}

/* -------------------------------------------------------------------------
 * Extra REST data
 * ---------------------------------------------------------------------- */

add_action(
	'rest_api_init',
	static function (): void {
		// Human-readable size of the report PDF, e.g. "2.7 MB".
		register_rest_field(
			'yapd_report',
			'yapd_file_size',
			array(
				'get_callback' => static function ( array $post ): ?string {
					if ( ! function_exists( 'get_field' ) ) {
						return null;
					}
					$file_id = get_field( 'file', $post['id'], false );
					$path    = $file_id ? get_attached_file( (int) $file_id ) : false;
					return $path && file_exists( $path ) ? size_format( filesize( $path ), 1 ) : null;
				},
				'schema'       => array( 'type' => array( 'string', 'null' ) ),
			)
		);

		register_rest_route(
			'yapd/v1',
			'/settings',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'permission_callback' => '__return_true',
				'callback'            => 'yapd_rest_settings',
			)
		);
	}
);

function yapd_get_settings(): array {
	$settings = get_option( YAPD_OPTION, array() );
	return is_array( $settings ) ? $settings : array();
}

function yapd_rest_settings(): WP_REST_Response {
	$s      = yapd_get_settings();
	$impact = array();
	for ( $i = 0; $i < YAPD_IMPACT_ROWS; $i++ ) {
		if ( ! empty( $s["impact_{$i}_value"] ) && ! empty( $s["impact_{$i}_label"] ) ) {
			$impact[] = array(
				'value'       => $s["impact_{$i}_value"],
				'label'       => $s["impact_{$i}_label"],
				'description' => $s["impact_{$i}_description"] ?? '',
			);
		}
	}

	$socials = array();
	foreach ( array( 'linkedin', 'x', 'instagram', 'facebook', 'youtube' ) as $network ) {
		if ( ! empty( $s[ $network ] ) ) {
			$socials[ $network ] = $s[ $network ];
		}
	}

	// The build hook URL is deliberately never exposed.
	return new WP_REST_Response(
		array(
			'email'     => $s['email'] ?? '',
			'phone'     => $s['phone'] ?? '',
			'address'   => $s['address'] ?? '',
			'donateUrl' => $s['donate_url'] ?? '',
			'socials'   => (object) $socials,
			'impact'    => $impact,
		)
	);
}

/* -------------------------------------------------------------------------
 * Settings page (Settings > YAPD4Africa site)
 * ---------------------------------------------------------------------- */

function yapd_settings_fields(): array {
	$fields = array(
		'contact' => array(
			'title'  => 'Contact details',
			'fields' => array(
				'email'   => array( 'Email', 'email' ),
				'phone'   => array( 'Phone (international format, e.g. +2347047335782)', 'text' ),
				'address' => array( 'Address', 'text' ),
			),
		),
		'support' => array(
			'title'  => 'Donations',
			'fields' => array(
				'donate_url' => array( 'Online donation page URL (Paystack, Flutterwave, GlobalGiving…). Empty: visitors are invited to email you.', 'url' ),
			),
		),
		'socials' => array(
			'title'  => 'Social networks',
			'fields' => array(
				'linkedin'  => array( 'LinkedIn URL', 'url' ),
				'x'         => array( 'X (Twitter) URL', 'url' ),
				'instagram' => array( 'Instagram URL', 'url' ),
				'facebook'  => array( 'Facebook URL', 'url' ),
				'youtube'   => array( 'YouTube URL', 'url' ),
			),
		),
		'impact'  => array(
			'title'  => 'Impact figures (home page)',
			'fields' => array(),
		),
		'deploy'  => array(
			'title'  => 'Deployment',
			'fields' => array(
				'build_hook' => array( 'Netlify build hook URL (Netlify > Project configuration > Build & deploy > Build hooks). Ignored if YAPD_NETLIFY_BUILD_HOOK is defined in wp-config.php.', 'url' ),
			),
		),
	);
	for ( $i = 0; $i < YAPD_IMPACT_ROWS; $i++ ) {
		$n                                                     = $i + 1;
		$fields['impact']['fields']["impact_{$i}_value"]       = array( "#{$n} Figure (e.g. 30,000+)", 'text' );
		$fields['impact']['fields']["impact_{$i}_label"]       = array( "#{$n} Label", 'text' );
		$fields['impact']['fields']["impact_{$i}_description"] = array( "#{$n} Description", 'text' );
	}
	return $fields;
}

add_action(
	'admin_menu',
	static function (): void {
		add_options_page( 'YAPD4Africa site', 'YAPD4Africa site', 'manage_options', 'yapd-settings', 'yapd_render_settings_page' );
	}
);

add_action(
	'admin_init',
	static function (): void {
		register_setting(
			'yapd_settings',
			YAPD_OPTION,
			array(
				'type'              => 'array',
				'sanitize_callback' => 'yapd_sanitize_settings',
				'default'           => array(),
			)
		);

		foreach ( yapd_settings_fields() as $section_id => $section ) {
			add_settings_section( "yapd_{$section_id}", $section['title'], '__return_null', 'yapd-settings' );
			foreach ( $section['fields'] as $name => list( $label, $type ) ) {
				add_settings_field(
					$name,
					esc_html( $label ),
					static function () use ( $name, $type ): void {
						$value = yapd_get_settings()[ $name ] ?? '';
						printf(
							'<input type="%1$s" class="regular-text" name="%2$s[%3$s]" id="%3$s" value="%4$s" />',
							esc_attr( $type ),
							esc_attr( YAPD_OPTION ),
							esc_attr( $name ),
							esc_attr( $value )
						);
					},
					'yapd-settings',
					"yapd_{$section_id}",
					array( 'label_for' => $name )
				);
			}
		}
	}
);

function yapd_sanitize_settings( $input ): array {
	$clean = array();
	foreach ( yapd_settings_fields() as $section ) {
		foreach ( $section['fields'] as $name => list( , $type ) ) {
			$value          = is_array( $input ) ? ( $input[ $name ] ?? '' ) : '';
			$clean[ $name ] = match ( $type ) {
				'url'   => esc_url_raw( trim( $value ) ),
				'email' => sanitize_email( $value ),
				default => sanitize_text_field( $value ),
			};
		}
	}
	return $clean;
}

function yapd_render_settings_page(): void {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
	<div class="wrap">
		<h1>YAPD4Africa site</h1>
		<p>Global information used by the website (footer, contact page, home page). Empty fields fall back to the values built into the site.</p>
		<form action="options.php" method="post">
			<?php
			settings_fields( 'yapd_settings' );
			do_settings_sections( 'yapd-settings' );
			submit_button();
			?>
		</form>
	</div>
	<?php
}
