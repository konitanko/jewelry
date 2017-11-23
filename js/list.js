	var indexHead=$("header").html();
	var sousuoHeader='<form action="#" method="post"><input type="text" placeholder="搜索商品/店铺" value=""/><a href="#"><span class="icon iconfont">&#xe77e;</span></a></form><p id="cel">取消</p>'
	var sousuocon='<div class="sousuo">			<div class="sousuocon">				<p>历史记录</p>				<p><a href="#">沙滩裙</a></p>				<p><a href="#">运动女鞋</a></p>				<p><a href="#">短裤</a><span>女士</span><span>男士</span></p>				<p><a href="#">台式电扇</a><span>家用</span><span>机械式</span><span>落地扇</span></p>				<p><a href="#">欧诗漫旗舰店</a></p>				<p><a href="#">美特斯邦威旗舰店</a></p>				<p><a href="#">运动男鞋</a><span>休闲鞋</span><span>透气</span><span>跑步鞋</span></p>			</div>			<div class="sousuobottom">				<p><span class="icon iconfont">&#xe687;</span>按住说出你要的宝贝</p>			</div>		</div>		'
	
	
	$("header").on("click","#indexsearch",function(){
		$("header").addClass("sousuohead").siblings().hide();
		$("header").empty().html(sousuoHeader);
		$("#indexPage").append(sousuocon);
		
		
	});
	$("header").on("click","#cel",function(){
		$("header").removeClass("sousuohead").siblings().show();
		$("header").empty().append(indexHead);
	});