//--- Menu Fixed
$(document).ready(function(){
	let altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	})
});
