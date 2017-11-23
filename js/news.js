$(function(){
	$(window).scroll(function(){
		var wd = $(document).height();
		var ck = $(window).height();
		var gdt = $(window).scrollTop();
		if(ck+gdt>=wd){
			$.ajax({
				type:"get",
				url:"js/index.json",
				dataType:"json",
				success:function(jo){
					var len = jo.length;
					if(len>0){
						$.each(jo,function(a){
							var html = '<dl>'
							+'<dt><a href="#"><img src='+jo[a].img+'/></a></dt>'
							+'<dd><a href="#">'+jo[a].name+'</a><span>￥'+jo[a].pay+'</span></dd>'
							+'<dd>可用积分抵扣'+jo[a].pos+'元</dd>'
							+'<dd><strong>'+jo[a].text+'</strong><strong>'+jo[a].top+'人付费</strong><strong>'+jo[a].didian+'</strong></dd>'
							+'</dl>';
							$(".updatecon").append(html);
						});
					}
					var size = $(".updatecon dl").size()
					if(size>10){
						$(window).off();
						$(".load p").html("数据加载已完成");
					}
				}
			});
		}
	});
});