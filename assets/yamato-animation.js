$(function() {
  $(window).on('load', function() {
		if (location.pathname === '/') {
    	setTimeout(function() {
      	$('.fv-anime').addClass('fv-anime-active');
    	}, 2000);

			setTimeout(function() {
				$('.fv-anime2').addClass('fv-anime2-active');
			}, 1500)
		}
  });

	$(window).on('load scroll', function() {
		$('.fade').each(function() {
			let target = $(this).offset().top;
			let scroll = $(window).scrollTop();
			let height = $(window).height();

			if (scroll > target - height) {
				$(this).addClass('fade-active');
			}
		});
	});

	let pos = 0;
	const banner = $('.buy-btn');

	$(window).on('scroll', function() {
		if ($(this).scrollTop() < pos ){
			banner.removeClass('active');
		}else{
			banner.addClass('active');
		}
		pos = $(this).scrollTop();
	});
});