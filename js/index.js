/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);




(function() {
	$( document ).ready(function() {
  
});
	var $body = document.body
	, $header__menu = $body.getElementsByClassName('header__menu')[0];

	if ( typeof $header__menu !== 'undefined' ) {
		$header__menu.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
			
		});
	}
	}).call(this);
	
	$("#header__button").click(function() {
  $(this).toggleClass("hamburger--open");
});
	
	$(function() {
  // Bind Click event to the drop down navigation button
  $(".nav-button").click(function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    $(this).parent().parent().toggleClass("closed");
  });

});
	
	
	
	


	