function go(u){
	window.location.href = u+"?classNumber="+url("classNumber");
}

getClassRoomByNumber();
	function getClassRoomByNumber(){
		$.ajax({
			type:"get",
			url:controllerUrl+"class_room/get_class_room_by_number",
			async:true,
			dataType:"json",
			data:{
				classNumber:url("classNumber"),
				
			},success:function(data){
			//	console.log(data);
				
				$(".img img").attr("src",controllerUrl+'resource/'+data.data.classHeadUrl);
			},error:function(data){
				console.log(data);
			}
		});	
		
		
	}