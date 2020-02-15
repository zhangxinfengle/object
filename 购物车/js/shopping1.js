(function() {
	var nowIndex = -1;
	var time = 0;
	var goNext = function() {
		if(nowIndex < $('.slider').length - 1) {
			nowIndex += 1;
		} else {
			nowIndex = 0;
		}
		$('.slider').css('opacity', 0);
		$('.ui-pager-link').removeClass('ui-pager-link-active');
		$('.slider').eq(nowIndex).css('opacity', 1);
		$('.ui-pager-link').eq(nowIndex).addClass('ui-pager-link-active');
	}
	var goPre = function() {
		if(nowIndex <= 0) {
			nowIndex = $('.slider').length - 1;
		} else {
			nowIndex -= 1;
		}
		$('.slider').css('opacity', 0);
		$('.ui-pager-link').remove('ui-pager-link-active');
		$('.slider').eq(nowIndex).css('opacity', 1);
		$('.ui-pager-link').eq(nowIndex).addClass('ui-pager-link-active');
	}
	$('.ui-pre').on('click', function() {
		goPre();
		time = 0;
	})
	$('.ui-next').on('click', function() {
		goNext();
		time = 0;
	})
	goNext();
	setInterval(function() {
		if(time >= 50) {
			goNext();
			time = 0;
		} else {
			time += 1;
		}
	}, 100);
})();
$(window).on('scroll', function() {
	if($(document).scrollTop() >= 228) {
		$('.product-box.product-box-hidden').addClass('nav-fix');
	} else {
		$('.product-box.product-box-hidden').removeClass('nav-fix');
	}
	if($(document).scrollTop() >= 198) {
		$('.img-con').addClass('fix');
		$('.img-con').css('margin-top', 0);
	} else {
		$('.img-con').removeClass('fix');
	}
	if($(document).scrollTop() >= 298) {
		$('.img-con').removeClass('fix');
		$('.img-con').css('margin-top', 190);
	}
});

(function() {
	$('.step-list').children('li.btn-biglarge').on('click', function() {
		var me_this = this;
		var data_name = $(me_this).attr('data-name');
		var data_price = $(me_this).attr('data-price');
		$('.step-list').children('li.btn-biglarge').removeClass('active');
		$(this).addClass('active');
		$('.pro-price').children('span.price').html($(me_this).attr('data-price'));
		$('.pro-list').find('li:nth-child(1)').html(`${data_name}<span>${data_price}</span>`)
		$('.pro-list').find('li.totlePrice').html(`总计 ：${data_price}`);
	})

})();