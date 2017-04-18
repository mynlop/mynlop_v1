$(document).ready(function(){
	// obtener informacion de about
	$.getJSON("https://hungry-art-2749.nanoscaleapi.io/about", function(data){
        // console.log(data.datos);
        var output = '';
        output += '<h1>'+data.datos.nombre+'</h1>';
        output += '<h2>'+data.datos.profresion+'</h2>';
        output += '<p>'+data.datos.parrafo1+'</p>';
        output += '<p>'+data.datos.parrafo2+'</p>';
        output += '<p>'+data.datos.frase+'</p>';
        output += '<div class = "conocimientos">';
        $.each( data.datos.tecnologias, function(i, val ){
			output += '<div class="caja">';
			output += '<div class="skill-pic">';
            output += '<img src="'+data.datos.tecnologias[i].imagen+'">';
			output += '</div>'
			output += '<div class="description">';
			output += '<h3>'+data.datos.tecnologias[i].nombre+'</h3>';
			output += '<p>'+data.datos.tecnologias[i].porcentaje+'</p>'
			output += '</div>';
			output += '</div>';
        });
        output += '</div>';
        $('.acerca').html(output);
		var output_presentacion = '<p>'+data.datos.info+'</p>';
		$('.areaInfo .info').html(output_presentacion);
	});
    // obtener informacion de proyectos
	$.getJSON("https://hungry-art-2749.nanoscaleapi.io/proyects", function(data){
        console.log(data.proyectos);
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

