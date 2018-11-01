var controllerUrl = "http://localhost:8080/";
  function url(name)  
{  
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
     var r = window.location.search.substr(1).match(reg);  
     if(r!=null)return  unescape(r[2]); return null;  
}
//对话框的显示和隐藏
function showDialog(data){
	showMask();   

	if(data!=null){
		var dataId = data.id+"";
	
		if(dataId[0]!='#')dataId = '#'+dataId;
		
		$(dataId).css("width",data.width==undefined?400:data.width);
		$(dataId).css("height",data.height==undefined?400:data.height);
		var left = ($(document).width()-data.width)/2;    		
		$(dataId).css("left",left);
	
		if(data.id==undefined){
			$(".dialog").show();
		}else{
			$(dataId).show();
			
		}
		
		
	}
	
    
}
function hideDialog(id){
	 hideMask();
	 if(id==undefined||id==null)$(".dialog").hide();
	else $("#"+id).hide();
}
function showMask(){
	$("#mask").css("height",$(document).height());     
    $("#mask").css("width",$(document).width());     
    $("#mask").show();
}
//隐藏遮罩层  
function hideMask(){     
    $(".mask").hide();  
   	
}
function getNum(str){
	var s = 0;
	for(var i=0;i<str.length;i++){
		if(str[i]>='0'&&str[i]<='9'){
			s =s*10- ('0'-str[i]);
		}
		
	}
	return s-0;
	
}


if(localStorage["user"]=="null"){
	$(".right").html("<a onclick='unlogin()' style='margin-right:80px;cursor:pointer '>登录</a>");	
}else{
	$(".right").html("<a onclick='unlogin()' style='margin-right:80px;cursor:pointer '>注销</a>");	
}

if(localStorage["user"]=="null"){
	window.location.href = "../index/index.html";
}

function unlogin(){
	if(localStorage["user"])
	
	localStorage.setItem("user",null);
	window.location.href = "../index/index.html";
	
}

function show(info){
	alert(info);
}
