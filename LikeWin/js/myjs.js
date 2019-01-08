//myjs
$(".start_menu").hide();
$(function(){
	
	$(".start").on("click",function(){
			$(".start_menu").show();
	})
	$(".main").on("click",function(){
			$(".start_menu").hide();
			//点击桌面开始菜单消失
	});
});
	$(".icon li").on("dblclick",function(){
		
		var $div0 = $("<div></div>");
		//创建底部对应任务栏
		var $div0_fuben = $("<div>"+$(this).text()+"</div>");
		
		//打开窗口默认样式
		var mleft = 200+'px';
		var mtop=200+'px';
		$div0.css({"marginLeft":mleft,
					"marginTop":mtop,
					"position":"absolute",
					"background":"#fff",
					"height":"300px",
					"width":"300px",
					"zIndex":999});
		$div0_fuben.css({
					"position":"absolute",
					"background":"#e9e9e9",
					"height":"40px",
					"width":"100px"});
					
		var $div0_title = $("<div>"+$(this).text()+"</div>");
		$div0_title.css({"paddingLeft":"10px",
						"background":"#D3D3D3",
						"height":"30px",
						"lineHeight":"30px"});
						
		//创建最小化、最大化、关闭窗口按键			
		var $div0_small = $("<img>");
		var $div0_large = $("<img>");
		var $div0_quxiao = $("<img>");
		$div0_small.attr("src","./img/small.png");
		$div0_large.attr("src","./img/large.png");
		$div0_quxiao.attr("src","./img/X.png");
		$div0_small.css({"height":"25px",
							"width":"25px",
							"position":"absolute",
							"right":"70px"
						});
		$div0_large.css({"height":"25px",
							"width":"25px",
							"position":"absolute",
							"right":"40px"
						});
		$div0_quxiao.css({"height":"25px",
							"width":"25px",
							"position":"absolute",
							"right":"10px"
						});
						
		
		
		//最小化、最大化、关闭窗口事件
		$div0_small.on("click",function(){
			$div0.css("visibility","hidden");
		});
		$div0_large.on("click",function(){
			if($div0.width()!=$("body").width()){
				$div0.css({"height":$('.main').height(),
						"width":$("body").width(),
						"position":"absolute",
						"Left":0,
						"Top":0
						
				});
			}
			else{
				$div0.css({"marginLeft":mleft,
					"marginTop":mtop,
					"position":"absolute",
					"background":"#fff",
					"height":"300px",
					"width":"300px"
				});
			}
		});
		$div0_quxiao.on("click",function(){
			$div0.css("display","none");
			$div0_fuben.css("display","none");
		});
		//对应底部任务栏事件
		$div0_fuben.on("click",function(){
			if($div0.css("visibility")=="hidden"){
				$div0.css("visibility","visible");
			}
			else{
				$div0.css("visibility","hidden");
			}
		});
			//拖动窗口
			$div0_title.on("mousedown",function(e){
	
				// $div0.css('position','absolute');
				var disX = e.clientX - $div0.position().left,
                disY = e.clientY - $div0.position().top;
                
				$(document).on('mousemove',function(e){
					$div0.css('left',e.clientX - disX);
					$div0.css('top',e.clientY - disY);
				})
				$(document).on('mouseup',function(){
					$(document).off();
				})
			});
		
		$div0.append($div0_title);
		
		$div0_title.append($div0_small);
		$div0_title.append($div0_large);
		$div0_title.append($div0_quxiao);
		$(".main").append($div0);
		$(".footer").append($div0_fuben);
	});
	

//右下角时间
function startTime(){
		var today=new Date();
		var y = today.getFullYear();
		var mo = today.getMonth();
		var d = today.getDate();
		var h=today.getHours();
		var mi=today.getMinutes();
		var s=today.getSeconds();
		mi=checkTime(mi);
		s=checkTime(s);
		$(".time").html(h+":"+mi+":"+s);
		$(".date").html(y+"/"+mo+1+"/"+d);
		t=setTimeout('startTime()',500);
	}
function checkTime(i)
{
	if (i<10){i="0" + i;}
	  return i;
	}	
startTime();
