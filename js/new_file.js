	var index=0;
	var len= $(".hotleft ul").length-1;
	$(".hotleft ul:gt(0)").hide();
	$(".hotright").click(function(){
		if (index<len) {
			index++;
		} else{
			index=0;
		}
		$(".hotleft ul").eq(index).show().siblings().hide();
	})
	
	var indexHead=$("header").html();
	var sousuoHeader='<form action="#" method="post"><input type="text" placeholder="搜索商品/店铺" value=""/><a href="#"><span class="icon iconfont">&#xe62d;</span></a></form><p id="cel">取消</p>'
	var sousuocon='<div class="sousuo">			<div class="sousuocon">				<p>历史记录</p>				<p><a href="list01.html">花朵耳环</a></p>				<p><a href="#">订婚戒指</a></p>				<p><a href="#">手链</a><span>女士</span><span>男士</span></p>			<p><a href="#">项链</a><span>玛瑙</span><span>翡翠</span><span>佛玉</span></p>			</div>			<div class="sousuobottom">				<p><span class="icon iconfont">&#xe68d;</span>按住说出你要的宝贝</p>			</div>		</div>		'
	
	
	$("header").on("click","#indexsearch",function(){
		$("header").addClass("sousuohead").siblings().hide();
		$("header").empty().html(sousuoHeader);
		$("#indexPage").append(sousuocon);
		
		
	});
	$("header").on("click","#cel",function(){
		$("header").removeClass("sousuohead").siblings().show();
		$(".sousuo").remove();
		$("header").empty().append(indexHead);
	});
