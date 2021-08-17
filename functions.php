<?php
/**
 * Rouben child theme functions
 *
 *
 * Enqueue the child theme styles after parent styles
 */


add_action( 'wp_enqueue_scripts', 'premitheme_enqueue_child_styles' );
function premitheme_enqueue_child_styles() {
	$parent_style_handle = 'pth-theme-style';
	wp_enqueue_style( 'pth-child-style', get_stylesheet_directory_uri() . '/style.css', array( $parent_style_handle ), wp_get_theme()->get('Version') );
}


/**
 *
 * Put your custom functions and functions overrides below
 */