<?php
/**
 * Only reached by editors previewing a draft: every other visit is redirected
 * to the public website (see inc/headless.php).
 */

defined( 'ABSPATH' ) || exit;
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="<?php echo esc_url( get_stylesheet_uri() ); ?>">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="yapd-preview-bar">
	<strong><?php esc_html_e( 'Preview', 'yapd4africa-headless' ); ?></strong> ·
	<?php esc_html_e( 'Content check only: the final layout is the one of the website, after publishing.', 'yapd4africa-headless' ); ?>
</div>
<main class="yapd-preview">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<p><?php echo esc_html( get_the_date() ); ?></p>
		<h1><?php the_title(); ?></h1>
		<?php
		if ( has_post_thumbnail() ) {
			the_post_thumbnail( 'large' );
		}
		if ( has_excerpt() ) {
			echo '<p><em>' . esc_html( get_the_excerpt() ) . '</em></p>';
		}
		the_content();
	endwhile;
	?>
</main>
<?php wp_footer(); ?>
</body>
</html>
