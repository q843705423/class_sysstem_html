$(".user-img img").attr("src",controllerUrl+"resource/"+JSON.parse(localStorage["user"]).headUrl);
$(".user-name").html(JSON.parse(localStorage["user"]).username);


getSchoolAndProfessionalByUserId();
function getSchoolAndProfessionalByUserId(){
	$.ajax({
		type:"get",
		url:controllerUrl+"user_info/getSchoolAndProfessionalByUserId",
		async:true,
		dataType:"json",
		data:{
			token:localStorage["token"],
			
		},success:function(data){
			var lists = $(".user-area ul li");
			if(data.data!=null){
				if(data.data[0]!=null){
					lists[0].innerHTML = data.data[0].school;
					lists[1].innerHTML = data.data[0].professional;
					lists[2].innerHTML = data.data[0].classes;
				}
				
			}
			
		},error:function(data){
			
		}
	});		
}

$(".user-img").on("click",function(){
	showDialog({
		id:"#user_img_dialog",
		width:600,
		height:400,
		
	})
	
})
