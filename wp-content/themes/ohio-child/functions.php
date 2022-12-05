<?php

	add_action( 'wp_enqueue_scripts', 'ohio_child_local_enqueue_parent_styles' );

	function ohio_child_local_enqueue_parent_styles() {
		wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	}
 
     function masonry_script() {
    wp_enqueue_script( 'masonry-js', get_stylesheet_directory_uri() . '/js/masonry.min.js', array( 'jquery' ),'',true );
}
add_action( 'wp_enqueue_scripts', 'masonry_script' );
 
 
    function my_custom_scripts() {
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array( 'jquery' ),'',true );
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );

function AS_disable_plugin_updates( $value ) {
	//create an array of plugins you want to exclude from updates ( string composed by folder/main_file.php)
	$pluginsNotUpdatable = [
		'advanced-custom-fields-pro/acf.php',
		'wp-mail-smtp-pro/wp_mail_smtp.php'
	];

	if ( isset($value) && is_object($value) ) {
		foreach ($pluginsNotUpdatable as $plugin) {
			if ( isset( $value->response[$plugin] ) ) {
				unset( $value->response[$plugin] );
			}
		}
	}
	return $value;
}
add_filter( 'site_transient_update_plugins', 'AS_disable_plugin_updates' );