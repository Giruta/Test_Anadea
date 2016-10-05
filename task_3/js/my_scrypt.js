$(document).ready(function() {


	$('#toggle_menu').click(function(){
		$('.header_right').slideToggle();		
	})


	$('.tab').not('.tab:first').css({'display':'none'});
	$('.tab_menu span').click(function(){
		$('.tab').css({'display':'none'});
		$('.tab_menu span').removeClass('active');
		$(this).addClass('active');


		var this_tabs = $(this).data('tabs');
		$('.tab').each(function(){
			var tab = $(this).attr('id');
			if (this_tabs == tab) {
				$(this).css({'display':'block'});
			};
		})
	})


	var settings_content = $('.setting').text();
	function size(){
		var w_width= $(window).width();
		if (w_width < 761) {
			$('.setting').text(' ');
		}else{
			$('.setting').text(settings_content);
			$('.header_right').css({'display':'block'})
		};
	}
	size();
	$(window).resize(function(){
		// 744
		size();
	})
	$('.foto, .foto_name').click(function(){
		$(this).parents('.item').find('.close').css({'display':'block'})
	})
	$('.avatar, .window_name').click(function(){
		$(this).parents('.item').find('.close').css({'display':'none'})
	})

	$('.answer_1').each(function(){
		var length_comments=$(this).parents('.comments').find('.string').length
		$(this).parents('.comments').find('.answer_1').text(length_comments+' comments')
		if (length_comments<='1'){
			$(this).parents('.comments').find('.double').css({'display':'none'})
		} else{
			$(this).parents('.comments').find('.double').css({'display':'block'})
		}
	})

	$('.answer_1').click(function(){
		var my_find=$(this).parents('.comments');
		my_find.find('.comments_left').css({'height':'auto'});
		my_find.find('.double').css({'display':'none'});
		my_find.find('.answer_1').css({'display':'none'});
		my_find.find('.answer_2').css({'display':'block'});
	})

	$('.answer_2').click(function(){
		var my_find=$(this).parents('.comments');
		my_find.find('.comments_left').css({'height':'34px'});
		my_find.find('.double').css({'display':'block'});
		my_find.find('.answer_1').css({'display':'block'});
		my_find.find('.answer_2').css({'display':'none'});
	})	
});

