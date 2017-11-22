<?php get_header(); ?>


<?php 
	
		if( have_posts() ):
			
			while( have_posts() ): the_post(); ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="logo-sm">
        <img src="<?php echo get_template_directory_uri(); ?>/img/logo-on-white.png" alt="">
    </div>
    <img class="blog-post-image" src="<?php echo get_template_directory_uri(); ?>/img/blog-post.jpg">
    <?php the_title('<h1 class="entry-title">','</h1>' ); ?>

    <figure>
        <img class="author-photo" src="<?php the_field('author-photo'); ?>">
        <figcaption>
               <p><?php echo get_the_date(); ?><br>
                Autor:
                <br><?php the_field('author'); ?>
            </p>
        </figcaption>
    </figure>

    <?php if( has_post_thumbnail() ): ?>

    <div class="pull-right">
        <?php the_post_thumbnail('thumbnail'); ?>
    </div>

    <?php endif; ?>

    <?php the_content(); ?>

    <a class="back-from-post" href="<?php echo esc_url( home_url( '#blog' ) ); ?>">wróć</a>
</article>

<?php endwhile;
			
		endif;
				
		?>

<?php get_footer(); ?>