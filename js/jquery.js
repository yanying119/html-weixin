$(function(){
	$(".sharing").click(function(){
		$(".sharing_option").toggle();
	});
	$(".sharing_option").find("a").hover(function(){
		$(this).css("background","#666");
	},function(){
		$(this).css("background","");
	});

	$(".footer_btn3").click(function(){
		$("#menu").toggle();
	});


	$(".product_box img:first").css("opacity","1")
	$(".product_top li:first").css("background","#ff313b")
	var n = 0;
	var run = setInterval(function(){
		if(n>=5){n=0};
		n=n+1;
		animate(n);
	},1000);

	$(".product_top").find("li").hover(function(){
		index = $(this).index();
		animate(index);
		clearInterval(run)
	},function(){
		run = setInterval(function(){
			if(index>=5){index=0};
			index=index+1;
			animate(index);
		},1000);
	});

	function animate(i){
		$(".product_box").find("img").css("opacity","0").eq(i).css("opacity","1");
		$(".product_top").find("li").css("background","#5483a4").eq(i%5).css("background","#ff313b");
	};

	$(".product_main li").eq(0).find("h2").append("<span></span>");
	$(".product_main li").eq(1).find("h2").append("<span></span>");
	$(".product_main li").find("span").attr("class","tip");

	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;

	var time = setInterval(function(){
		d = d+1;
		if(d>9){c=c+1,d=0};
		if(c>=6){b=b+1,c=0};
		$(".test_last-top p").text(a+b+":"+c+d);
		if(b>=30){clearInterval(time)};
	},10);	


	$(".test_last_foot button").click(function(){
		clearInterval(time);
	})


	$(".test_last_foot input").click(function(){
		$(this).css("background","url(img/test_last_footinput.gif)")
	});



	$(".test_page").eq(0).css("display","block");
	var  m = 0; 
	$(".test_page").eq(m).find("input").click(function(){
		m= m+1;
		$(".test_page").css("display","none").eq(m).css("display","block");
		next(m);
	});

	function  next(i){
		$(".test_page").eq(i).find("input").click(function(){
			if(i>=3){i=2 };
			i = i+1
			$(".test_page").css("display","none").eq(i).css("display","block");
			next(i);
		});
	}

	$(".test_result_show").find("span").click(function(){
		$(this).parent().next().toggle();
	});

	$(".news_top").find("li").hover(function(){
			$(this).css("background","#006bbe");
		},function(){
			$(this).css("background","#2995e8");
		}
	);

});