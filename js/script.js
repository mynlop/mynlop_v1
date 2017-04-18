(function(){
	console.log($(".cerrarInfo").length > 0);
    let ver = false;
    $(".informacion").click(function(){
        ver = (ver) ? false : true;
        if (ver) {
            $(".areaInfo").css("left", "0%")
        }else{
             $(".areaInfo").css("left", "-100%");
        }  
    });


})();
function verInfoProyecto(){
	$(".proyectos .carta").click(function(){
		$(".personal").css("justify-content","space-around");
		$(".foto").css("width","25%");
		$(".info").css("display","none");
		$(".infoProyecto").css("display","block");
	});
	$(".cerrarInfo").click(function(){
		console.log('saludos');
    	$(".foto").css("width","70%");
    	$(".info").css("display","block");
    	$(".infoProyecto").css("display","none");
    });
	var mediaQuery = window.matchMedia("(max-width: 500px)");
    if(mediaQuery.matches){
	    $(".proyectos .carta").click(function(){
    		$(".personal").css("justify-content","space-around");
    		$(".foto").css("width","25%");
    		$(".info").css("display","none");
    		$(".infoProyecto").css("display","block");
    		 $(".areaInfo").css("left", "0%")
    	});
	    $(".cerrarInfo").click(function(){
	    	$(".foto").css("width","70%");
	    	$(".info").css("display","block");
	    	$(".infoProyecto").css("display","none");
	    	$(".areaInfo").css("left", "-100%");
	    });
    }
}