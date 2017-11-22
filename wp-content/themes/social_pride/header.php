<!doctype html>
<html lang="pl">
<html>
	<head>
		<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Social Pride</title>
		<?php wp_head(); ?>
	</head>
	
	<body>
		
	<div id="hamburger">
        <div id="nav-icon2" class="menu">
            <div class="menu-inner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <div class="sidebar hide-sidebar">
        <ul class="centered" id="myMenu">
           <li data-menuanchor="main"><a href="<?php echo esc_url( home_url( '#main' ) ); ?>">SOCIAL PRIDE</a></li>
            <li data-menuanchor="about"><a href="<?php echo esc_url( home_url( '#about' ) ); ?>">O NAS</a></li>
            <li data-menuanchor="offer"><a href="<?php echo esc_url( home_url( '#offer' ) ); ?>">OFERTA</a></li>
            <li data-menuanchor="blog"><a href="<?php echo esc_url( home_url( '#blog' ) ); ?>">BLOG</a></li>
            <li data-menuanchor="contact"><a href="<?php echo esc_url( home_url( '#contact' ) ); ?>">KONTAKT</a></li>
        </ul>
    </div>
    <div class="dotstyle dotstyle-tooltip">
        <ul>
            <li class="current"><a href="<?php echo esc_url( home_url( '#main' ) ); ?>">Strona główna</a></li>
            <li><a href="<?php echo esc_url( home_url( '#about' ) ); ?>">O nas</a></li>
            <li><a href="<?php echo esc_url( home_url( '#offer' ) ); ?>">Oferta</a></li>
            <li><a href="<?php echo esc_url( home_url( '#blog' ) ); ?>">Blog</a></li>
            <li><a href="<?php echo esc_url( home_url( '#contact' ) ); ?>">Kontakt</a></li>
        </ul>
        <img src="<?php echo get_template_directory_uri(); ?>/img/dots.png" alt="">
    </div>
    <nav class="navbar navbar-mobile navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
                <a class="navbar-brand" href="#main"><img src="<?php echo get_template_directory_uri(); ?>/img/logo-on-blue.png" alt=""></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="<?php echo esc_url( home_url( '#main' ) ); ?>">SOCIAL PRIDE</a></li>
                    <li><a href="<?php echo esc_url( home_url( '#about' ) ); ?>">O NAS</a></li>
                    <li><a href="<?php echo esc_url( home_url( '#offer' ) ); ?>">OFERTA</a></li>
                    <li><a href="<?php echo esc_url( home_url( '#blog' ) ); ?>">BLOG</a></li>
                    <li><a href="<?php echo esc_url( home_url( '#contact' ) ); ?>">KONTAKT</a></li>
                </ul>
            </div>
        </div>
    </nav>