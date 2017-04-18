$(document).ready(function(){
    // obtener informacion de proyectos
	$.getJSON("https://hungry-art-2749.nanoscaleapi.io/proyects", function(data){
        // console.log(data.proyectos);
		// cargar las tarjetas
		var output = '';
		$.each( data.proyectos, function(i, val ){
            output += '<div class="carta">'+data.proyectos[i].imagen+'</div>';
        });
		$('.areaTrabajo').html(output);
       
        // cargar informacion de las tarjetas
        $(".proyectos .carta").each(function(e){
            $(this).on("click",function(){
                var output2 = '<br>';
                output2 += '<i class="fa fa-times fa-3x cerrarInfo" aria-hidden="true"></i>';
                output2 += '<h2>'+data.proyectos[e].nombre+'</h2><hr>';
                output2 += '<h3>'+data.proyectos[e].descripcion+'</h3><hr>';
                output2 += '<ul>';
                $.each( data.proyectos[e].tecnologias, function(i, val ){
                    output2 += '<li>'+data.proyectos[e].tecnologias[i]+'</li>';
                });
                output2 += '</ul>';
                $('.infoProyecto').html(output2);
                // console.log(data.proyectos[e]);
                verInfoProyecto();
            });
        });
	});
});

