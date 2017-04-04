$(document).ready(function(){
    let ver = false;
    $(".informacion").click(function(){
        ver = (ver) ? false : true;
        if (ver) {
            $(".areaInfo").css("left", "0%")
        }else{
             $(".areaInfo").css("left", "-100%");
        }  
    });
});