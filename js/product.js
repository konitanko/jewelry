window.onload = function() {
	var con = document.getElementById("container");
	var but = document.getElementById("buttons").getElementsByTagName("span");
	var pre = document.getElementById("prev");
	var nex = document.getElementById("next");
	var lis = document.getElementById("list");
	var index = 1;

	function bot(baset) {
		var btns = parseInt(lis.style.left) + baset;
		lis.style.left = btns + "px";
		if(btns < -1955) {
			lis.style.left = -391 + "px"
		}
		if(btns > -391) {
			lis.style.left = -1955 + "px"
		}
	}

	function shown() {
		for(var e = 0; e < but.length; e++) {
			if(but[e].className == "on") {
				but[e].className = ""
			}
		}
		but[index - 1].className = "on"
	}

	nex.onclick = function() {
		bot(-391);
		if(index == 5) {
			index = 1;
		}else{
			index += 1;
		}
		shown();
	}

	pre.onclick = function() {
		bot(391);
		if(ind == 1) {
			index = 5;
		}else{
			index -= 1;
		}
		shown();
	}
	/*-点击菜单-*/
	for(var i=0;i<but.length;i++){
		but[i].onclick=function(){
			var inds=parseInt(this.getAttribute("index"));
			var offset=-391*(inds-index);
			bot(offset);
			index=inds;
			shown();
		}
	}
	
	/*-自动播放-*/
	function play(){
		timer = setInterval(function(){
			next.onclick();
		},1000);
	}
	function stop(){
		clearInterval(timer);
	}
	con.onmouseover=stop;
	con.onmouseout=play;
	
	play();
}