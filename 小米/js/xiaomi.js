window.onload = function() {
	$("#J_miniCartTrigger").mouseenter(function() {
		$("#J_miniCartMenu").slideDown("1s");
		$("#J_miniCartBtn").animate({}, "1s", function() {
			$("#J_miniCartBtn").css({
				"background-color": "#fff",
				"color": "#f67000"
			});
		})
	});
	$("#J_miniCartTrigger").mouseleave(function() {
		$("#J_miniCartMenu").slideUp("1s");
		$("#J_miniCartBtn").animate({
			width: "100%"
		}, "1s", function() {
			$("#J_miniCartBtn").css({
				"background-color": "#424242",
				"color": "#b0b0b0"
			});
		})
	});
	
	var Loop = function() {
		var imgItem = document.getElementsByClassName('img_item');
		var left_btn = document.getElementById("left");
		var right_btn = document.getElementById("right");
		var loop = document.getElementById("loop");
		var point = document.getElementsByClassName('point');
		var index = 0;
		var time = 0;
		var goIndex = function() {
			clear();
			imgItem[index].className = "img_item active";
			point[index].className = "point change"
			time = 0;
		}
		var clear = function() {
			for(var i = 0; i < imgItem.length; i++) {
				imgItem[i].className = "img_item";
				point[i].className = "point";
			}
		}
		var goNext = function() {
			if(index < imgItem.length - 1) {
				index++;
			} else {
				index = 0;
			}
			goIndex();
		}
		var goPre = function() {
			if(index == 0) {
				index = imgItem.length - 1;
			} else {
				index--;
			}
			goIndex();
		}
		left_btn.addEventListener('click', function() {
			goPre();

		});
		right_btn.addEventListener('click', function() {
			goNext();
		})
		for(var i = 0; i < point.length; i++) {
			point[i].addEventListener('click', function() {
				index = this.getAttribute('data-index');
				goIndex();
			})
		}
		var t = setInterval(function() {
			time++;
			if(time == 50) {
				goNext();
				time = 0;
			}
		}, 100);
		loop.addEventListener('mouseover', function() {
			clearInterval(t);
		})
		loop.addEventListener('mouseout', function() {
			t = setInterval(function() {
				time++;
				if(time == 50) {
					goNext();
					time = 0;
				}
			}, 100);
		})
	}();
	var Loop2 = function() {
		var left_btn = document.getElementById("left2");
		var right_btn = document.getElementById("right2");
		var list = document.getElementById("list2");
		var btn = document.getElementsByClassName("btn2");
		right_btn.addEventListener('click', function() {
			list.style.marginLeft = "-991px"
			left_btn.className = "iconfont btn2 active";
			right_btn.className = "iconfont btn2";
		})
		left_btn.addEventListener('click', function() {
			list.style.marginLeft = "0px";
			right_btn.className = "iconfont btn2 active";
			left_btn.className = "iconfont btn2";
		})
	}();
	$(".tab-list").children().mouseover(function(){
		$(this).addClass("tab-active");
	})
	$(".tab-list").children().mouseleave(function(){
		$(this).removeClass("tab-active");
	})
	var circle = function(){
		var nav_item = document.getElementsByClassName("nav-item");
		var children_list = document.getElementsByClassName("children-list");
		var index = 0;
		var goIndex = function() {
			clear();
			children_list[index].className = "children-list active";	
		}
		var clear = function() {
			for(var i = 0; i < children_list.length; i++) {
				children_list[i].className = "children-list";
			}
			
		}
		for(var i = 0; i < children_list.length; i++) {
			nav_item[i].addEventListener('mouseover', function() {
				index = this.getAttribute('data-index');
				goIndex();
			})
		}
	}();
		$(".nav-item").mouseover(function(){
			$("#J_navMenu").css("display","block")
		})
		$("#J_navMenu").mouseover(function(){
			$("#J_navMenu").css("display","block")
		})
		$(".nav-item").mouseleave(function(){
			$("#J_navMenu").css("display","none")
		})
		$($(".nav-item")[8]).mouseover(function(){
			$("#J_navMenu").css("display","none")
		})
		$($(".nav-item")[9]).mouseover(function(){
			$("#J_navMenu").css("display","none")
		})
}