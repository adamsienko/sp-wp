<?php

  function script_enqueue() {
	//css
	wp_enqueue_style('style', get_template_directory_uri() . '/css/styles.css', array(), '1.0.0', 'all');
        
	wp_enqueue_style('fontawsome', get_template_directory_uri() . '/css/font-awesome.min.css', array(), '1.0.0', 'all');
    
    wp_enqueue_style('fullpage', get_template_directory_uri() . '/css/jquery.fullpage.min.css', array(), '1.0.0', 'all');
    
     wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '1.0.0', 'all');
    
	//js
	wp_enqueue_script('jquery');
    
     wp_enqueue_script('jQuery', get_template_directory_uri() . '/js/jquery-3.2.1.min.js', array(), '1.0.0', true);
    
	wp_enqueue_script('bootstrapjs', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '3.3.7', true);
    
	wp_enqueue_script('indexjs', get_template_directory_uri() . '/js/index.js', array(), '1.0.0', true);
    
    wp_enqueue_script('scroll', get_template_directory_uri() . '/js/scrolloverflow.min.js', array(), '1.0.0', true);
    
    wp_enqueue_script('fullpagejs', get_template_directory_uri() . '/js/jquery.fullPage.js', array(), '1.0.0', true);
    
     wp_enqueue_script('dots-m', get_template_directory_uri() . '/js/dots.js', array(), '1.0.0', true);
    
     wp_enqueue_script('canvas', get_template_directory_uri() . '/js/canvas.js', array(), '1.0.0', true);
    
      wp_enqueue_script('modernizr', get_template_directory_uri() . '/js/modernizr.min.js', array(), '1.0.0', true);
    
	
}

add_action( 'wp_enqueue_scripts', 'script_enqueue');