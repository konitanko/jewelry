$(function() {

	/*more*/
	$("header").on("click", "#inMore", function() {
		$(".xl2").toggle();
	});

	/*下拉菜单*/
	$(".classblock").click(function() {
		$(".block1").hide();
		$(".inblock").show();
		$(".inblock1").show();
	});
	$(".classblock1").click(function() {
		$(".block1").show();
		$(".inblock").hide();
		$(".inblock1").hide();
	});

	/*我的订单*/
	$("header").on("click", ".disnone", function() {
		$(".classnone").toggle();
		$(".classnone1").toggle();
	});

	/*实现返回顶部*/

	/*初始状态*/
	$("#rtt").hide();

	/*滚动出现图标*/
	$(window).scroll(function() {
		if($(window).scrollTop() > 30) {
			$("#rtt").show();
		} else {
			$("#rtt").hide();
		}
	});

	/*返回顶部*/
	$("#rtt").click(function() {
		$("html,body").animate({
			"scrollTop": 0
		}, 1000);
	});

	/*列表样式*/
	$(".selright").click(function() {
		if($(".app dl").attr("class") == "proListdl1") {
			$(".app dl").removeClass("proListdl1").addClass("proListdl");
			$(this).find("span").html("&#xe6b5;")

		} else {
			$(".app dl").addClass("proListdl1").removeClass("proListdl");
			$(this).find("span").html("&#xe6b4;")
		}
	});

	/*立即购买弹出层*/
	$(".bsd").click(function() {
		$("#dis").slideDown(300);
		$("#dps").show();
	});
	$(".miss").click(function() {
		$("#dis").slideUp(300);
		$("#dps").hide();
	});

	//删除订单效果
	$(".ordercon").each(function(i) {
		$(this).find(".cancelBtn").attr("id", "cancelBtn" + i);
		$("#cancelBtn" + i).click(function() {
			$(".pop,.blank1").show();
			$("#ok").attr("data-num", i);
		});
	});

	$("#delBtn").click(function() {
		$(".pop,.blank1").hide();
	});
	$("#ok").click(function() {
		$(".pop,.blank1").hide();

		var index = $("#ok").attr("data-num");
		$("#cancelBtn" + index).parents(".ordercon").remove();
	});

	/*滑动变化*/
	$(window).scroll(function() {
		var sH = $(window).scrollTop();
		if($("header").attr("class") == "proHead" && sH > 200) {
			$("header").addClass("xmxm");
			$("header a span").addClass("xxm");
		}else if($("header").attr("class") == "proHead xmxm" && sH < 200){
			$("header").addClass("dd");
			$("header a span").addClass("zc");
		}else if($("header").attr("class") == "proHead xmxm dd" && sH == 0){
			$("header").removeClass("xmxm dd");
			$("header a span").removeClass("xxm zc");
		}
	});
	/*购物车*/
	function getTotalPrice() {
		var shopNumber = $(".goshop").length;
		var checkShopNumber = $(".goshoptit .sel i.re").size();

		if(shopNumber == checkShopNumber) {
			$("#allSel i").addClass("re");
		} else {
			$("#allSel i").removeClass("re");
		}

		$(".total em").text(0);
		$(".goshopcon .sel i.re").each(function() {
			var total = parseInt($(".total em").text());
			var singlePrice = parseInt($(this).parents(".goshopcon").find(".newPrice span").text());
			var singleNum = parseInt($(this).parents(".goshopcon").find(".number span").text());
			var singleTotal = singlePrice * singleNum;

			total += singleTotal;
			$(".total em").text(total);
		});
	};

	//全选
	$("#allSel").click(function() {
		if($(this).find("i").attr("class") == "icon iconfont picbig") {
			$(this).find("i").addClass("re");
			$(".goshoptit .sel i").addClass("re");
			$(".goshopcon .sel i").addClass("re");
		} else {
			$(this).find("i").removeClass("re");
			$(".goshoptit .sel i").removeClass("re");
			$(".goshopcon .sel i").removeClass("re");
		}
		getTotalPrice();
	});

	//选择单个商品
	$(".goshopcon .sel").click(function() {
		var $pro = $(this).parents(".goshop");

		if($(this).find("i").attr("class") == "icon iconfont picbig") {
			$(this).find("i").addClass("re");

		} else {
			$(this).find("i").removeClass("re");
			$pro.find(".goshoptit .sel i").removeClass("re");
			$("#allSel i").removeClass("re");
		}

		var proNumber = $pro.find(".goshopcon").length;
		var checkProNumber = $pro.find(".goshopcon .sel i.re").size();
		if(proNumber == checkProNumber) {
			$pro.find(".goshoptit .sel i").addClass("re");
		}
		getTotalPrice();

	});

	//选择店铺
	$(".goshoptit .sel").click(function(){
		var $pro = $(this).parents(".goshop");
		
		if ($(this).find("i").attr("class") == "icon iconfont picbig") {
			
			$(this).find("i").addClass("re");
			$pro.find(".goshopcon .sel i").addClass("re");
			
		} else{
			$(this).find("i").removeClass("re");
			$pro.find(".goshopcon .sel i").removeClass("re");
		}
		getTotalPrice();
	});
});
//宝贝顶部效果
	$(window).scroll(function() {
		var imgH = $(".flexslider").height();
		var sT = $(window).scrollTop();
		var hea = $(".title").height();
		var op = sT / (imgH - hea);
		$(".title").css("background", "rgba(249,249,249," + op + ")");
		//		$(".title div").css("background","rgba(0,0,0,"+(1-op)/2+")");
		$(".title div i").css("color", "rgba(255,255,255," + (1 - op) + ")");
		//		$(".title div i").css("background","rgba(255,255,255,"+(1-op)+")");
		if (sT > imgH / 2) {
			$(".title div i").css("color", "rgba(0,0,0," + (op - 0.5) * 2 + ")");
			$(".title div i").css("background", "rgba(0,0,0," + (1 - op) + ")");
		}
	});