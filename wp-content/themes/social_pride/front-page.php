<?php get_header(); ?>
<div id="preloader">
    <div id="status">&nbsp;</div>
</div>
<div id="canvas-outer">
    <canvas height="900" width="900" style="margin: 0px;" id="canvas"></canvas>
</div>
<div id="page-background">
    <div class="main-background"> </div>
    <div class="about-background"></div>
    <div class="offer-background"></div>
    <div class="blog-background"></div>
    <div class="contact-background"></div>
</div>
<div id="fullpage">

    <section id="main1" class="section">
        <div class="main-header">
            <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="social pride">
            <h1>
                <?php the_field('title_1'); ?>
            </h1>
        </div>
        <a href="#about" class="cd-scroll-down"><img src="<?php echo get_template_directory_uri(); ?>/img/scroll.png" alt=""></a>
    </section>
    <section id="about1" class="section">
        <div class="section-inner">
            <h2>O NAS</h2>
            <div class="about-header">
                <?php the_field('about_text'); ?>
            </div>
            <div class="container about-main">
                <div class="row">
                    <div class="col-xs-12 col-md-4 about-inner">
                        <svg class="icon-loader" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 10 100 100" version="1.1">
                        <image class='scale scale-icon' xlink:href="<?php echo get_template_directory_uri(); ?>/img/wizer-icon.png" x="5" y="35" height="50px" width="50px"/><g class="heart-loader__group">
                        <path class="icon-loader__circle" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/></g>
                        </svg>
                        <h3>DLA MAREK:<br><span>WIZERUNKOWO</span></h3>
                        <p>
                            <?php the_field('dla_marek'); ?>
                        </p>
                    </div>
                    <div class="col-xs-12 col-md-4 about-inner">
                        <svg class="icon-loader" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 10 100 100" version="1.1">
                        <image class='scale scale-icon' xlink:href="<?php echo get_template_directory_uri(); ?>/img/sprzedaz-icon.png" x="5" y="35" height="50px" width="50px"/>
                        <g class="heart-loader__group">
                        <path class="icon-loader__circle" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
                        </g>
                        </svg>
                        <h3>DLA FIRM:<br><span>SPRZEDAŻOWO</span></h3>
                        <p>
                            <?php the_field('dla_firm'); ?>
                        </p>
                    </div>
                    <div class="col-xs-12 col-md-4 about-inner">
                        <svg class="icon-loader" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 10 100 100" version="1.1">
                        <image class='scale scale-icon' xlink:href="<?php echo get_template_directory_uri(); ?>/img/pr-icon.png" x="5" y="35" height="50px" width="50px"/>
                        <g class="heart-loader__group">
                        <path class="icon-loader__circle" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
                        </g>
                        </svg>
                        <h3>DLA OSÓB PUBLICZNYCH:<br><span>PR-OWO</span></h3>
                        <p>
                            <?php the_field('dla_osob_publicznych'); ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="scroll">
                <a href="#offer" class="cd-scroll-down"><img src="<?php echo get_template_directory_uri(); ?>/img/scroll.png" alt=""></a>
            </div>
            <div class="logo-sm">
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo-sm.png" alt="">
            </div>
        </div>
    </section>
    <section id="offer1" class="section">
        <div class="section-inner">
            <h2>OFERTA</h2>
            <p class="offer-header">
                <?php the_field('offer_text'); ?>
            </p>
            <div class="container offer-main">
                <div class="row">
                    <div class="col-xs-12 col-lg-6 offer-marketing ">
                        <svg class="icon-loader" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 10 100 100" version="1.1">
                        <image class='scale scale-icon' xlink:href="<?php echo get_template_directory_uri(); ?>/img/marketing-icon.png" x="5" y="35" height="50px" width="50px"/>
                        <g class="heart-loader__group">
                        <path class="icon-loader__circle" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
                        </g>
                        </svg>
                        <h4>Marketing</h4>
                        <p>
                            <?php the_field('marketing_text'); ?>
                        </p>
                    </div>
                    <div class="col-xs-12 col-lg-6">
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-lg-6">
                    </div>
                    <div class="col-xs-12 col-lg-6 offer-social">
                        <svg class="icon-loader" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 10 100 100" version="1.1">
                        <image class='scale scale-icon' xlink:href="<?php echo get_template_directory_uri(); ?>/img/social-icon.png" x="5" y="35" height="50px" width="50px"/>
                        <g class="heart-loader__group">
                        <path class="icon-loader__circle" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
                        </g>
                        </svg>
                        <h4>Social Media</h4>
                        <p>
                            <?php the_field('social_media'); ?>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-lg-6 offer-szkolenia">
                        <svg class="icon-loader" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 10 100 100" version="1.1">
                        <image class='scale scale-icon' xlink:href="<?php echo get_template_directory_uri(); ?>/img/szkol-icon.png" x="5" y="35" height="50px" width="50px"/>
                        <g class="heart-loader__group">
                        <path class="icon-loader__circle" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
                        </g>
                        </svg>
                        <h4>Szkolenia</h4>
                        <p>
                            <?php the_field('training'); ?>
                        </p>
                    </div>
                    <div class="col-xs-12 col-lg-6">
                    </div>
                </div>
            </div>
            <div class="scroll">
                <a href="#blog" class="cd-scroll-down"><img src="<?php echo get_template_directory_uri(); ?>/img/scroll.png" alt=""></a>
            </div>
            <div class="logo-sm">
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo-sm.png" alt="">
            </div>
        </div>
    </section>
    <section id="blog1" class="section">
        <div class="slide blog-first">
            <h2>BLOG</h2>
            <div class="blog-main">

                <?php
$args = array(
	'post_type' => 'post',
    'posts_per_page'      => 3

);

$the_query = new WP_Query( $args );

if ( $the_query->have_posts() ) {

	while ( $the_query->have_posts() ) {
		$the_query->the_post();
		?>
                    <div class="blog-content">
                        <h5>
                            <?php the_title(); ?>
                        </h5>
                        <p>
                            <?php the_excerpt(); ?>
                        </p>
                        <div class="more">
                            <a href="<?php the_permalink(); ?>">WIĘCEJ</a>
                        </div>
                    </div>

                    <?php

	wp_reset_postdata();
} }
                ?>
                        <div class="fp-controlArrow">
                            <span>zobacz wszystkie</span>
                        </div>
                        <a href="#contact" class="cd-scroll-down"><img src="<?php echo get_template_directory_uri(); ?>/img/scroll-black.png" alt=""></a>
                        <div class="logo-sm">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/logo-on-white.png" alt="">
                        </div>
            </div>
        </div>
        <div class="slide half blog-second fp-noscroll">
            <h2>BLOG</h2>

            <?php
$args = array(
	'post_type' => 'post',
    'posts_per_page'      => 3,
    'paged' => 1

);
$the_query = new WP_Query( $args );

if ( $the_query->have_posts() ) {

	while ( $the_query->have_posts() ) {
		$the_query->the_post();
		?>
                <div class="blog-main half-middle">
                    <div class="blog-content blog-top">
                        <h5>
                            <?php the_title(); ?>
                        </h5>
                        <p>
                            <?php the_excerpt(); ?>
                        </p>
                        <div class="more">
                            <a href="<?php the_permalink(); ?>">WIĘCEJ</a>
                        </div>
                    </div>
                </div>
                <a href="#contact" class="cd-scroll-down"><img src="<?php echo get_template_directory_uri(); ?>/img/scroll-black.png" alt=""></a>
                <div class="fp-controlArrow fp-prev">
                    <span>wróć</span>
                </div>
                <div class="fp-controlArrow fp-next">
                    <span>więcej</span>
                </div>
                <div class="logo-sm">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/logo-on-white.png" alt="">
                </div>
                <?php

	wp_reset_postdata();
} }
                ?>

        </div>
        <div class="slide half blog-third">
            <h2>BLOG</h2>
            <?php
$args = array(
	'post_type' => 'post',
    'posts_per_page'      => 3,
    'paged' => 2

);

$the_query = new WP_Query( $args );

if ( $the_query->have_posts() ) {

	while ( $the_query->have_posts() ) {
		$the_query->the_post();
		?>
                <div class="blog-main half-last">
                    <div class="blog-content">
                        <h5>
                            <?php the_title(); ?>
                        </h5>
                        <p>
                            <?php the_excerpt(); ?>
                        </p>
                        <div class="more">
                            <a href="<?php the_permalink(); ?>">WIĘCEJ</a>
                        </div>
                    </div>

                </div>
                <div id="button-back" class="fp-controlArrow fp-prev">
                    <span>wróć</span>
                </div>
                <?php

	wp_reset_postdata();
} }
                ?>
        </div>
    </section>
    <section id="contact1" class="section">
        <div class="section-inner">
            <h2>KONTAKT</h2>
            <div class="contact-inner">
                <p class="contact-text">
                    <?php the_field('contact_text'); ?>
                </p>
                <div class="container contact-owner">
                    <div class="row">
                        <div class="col-sx-12 col-sm-5 photo">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/katarzyna.jpg" alt="">
                        </div>
                        <div class="col-sx-12 col-sm-7 contact-data">
                            <h6>
                                <?php the_field('name'); ?>
                            </h6>
                            <p>
                                <?php the_field('contact_info'); ?>
                            </p>
                        </div>
                    </div>
                </div>
                <address>
            <?php the_field('address_hours'); ?>
            </address>
            </div>
            <div class="logo-sm">
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo-on-blue.png" alt="">
            </div>
        </div>
    </section>
    <?php get_footer(); ?>