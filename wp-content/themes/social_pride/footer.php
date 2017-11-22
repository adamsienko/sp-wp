<!--
	
	<footer>
		<p>This is my footer</p>
		<?php wp_nav_menu(array('theme_location'=>'secondary')); ?>
	</footer>
-->
	
	
	
	<?php wp_footer(); ?>
	
	 <script>
        [].slice.call(document.querySelectorAll('.dotstyle > ul')).forEach(function(nav) {
            new DotNav(nav, {
                callback: function(idx) {}
            });
        });
    </script>
    
	</body>
</html>