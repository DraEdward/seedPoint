function loadJs(url,callback){
	var script=document.createElement("script");
	script.type="text/javascript";
	if(typeof(callback)!="undefined"){
		if(script.readyState){
			script.onreadystatechange=function(){
				if(script.readyState=="loaded"||script.readyState=="complete"){
					script.onreadystatechange=null;
					callback();
				}
			}
		}else{
			script.onload=function(){
				callback();
			}
		}
	}
	script.src=url;
	document.body.appendChild(script);
}


loadJs("http://code.jquery.com/jquery-1.12.4.min.js",function(){
	$('a').mousemove(function(e){
		var i=$(e.target);
		$('#point-item-chart').fadeIn("slow");
		$('#point-item-chart').attr('hidden',false);
		$('#point-item-chart').find("#title").text(i.text());
		$('#point-item-chart').css("top",i.offset().top+i.height());
		$('#point-item-chart').css("left",i.offset().left+i.width()/2);
		$('#point-item-chart').css("z-index",2147483647);
	})
	$('#point-item-chart').mouseleave(function(e){
		$('#point-item-chart').fadeOut("slow");
		$('#point-item-chart').attr('hidden',true);
		
	})
	btnClick = function(ap){
		if($(ap).attr('value')==0){
			$(ap).css('background-color','#009EFB');
			$(ap).css('color','white');
			$(ap).attr('value',1);
		}else{
			$(ap).css('background-color','white');
			$(ap).css('color','black');
			$(ap).attr('value',0);
		}
			
	}
	
})
