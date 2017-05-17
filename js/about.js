$(document).ready(function(){
	// obtener informacion de about
	$.getJSON("https://quarkbackend.com/getfile/mynlop15/about", function(data){
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
		// var output_presentacion = '<p>'+data.datos.info+'</p>';
		// $('.areaInfo .info').html(output_presentacion);
	});
});
