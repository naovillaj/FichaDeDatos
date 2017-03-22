
	
    function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    }
	


var imprimir = document.getElementById("imprimir");
var records= document.getElementById('records');
imprimir.onclick = function(){
	
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var direccion = document.getElementById("direccion").value;

	if(nombre != "" && apellido != "" && dni != "" && direccion != "" && dni.length==8){

	records.innerHTML = "<ul><li>" + "Nombre: " + nombre +  "</li>" 
							   + "<li>" + "Apellido: " + apellido + "</li>" 
							   + "<li>" + "DNI: " + dni + "</li>" 
							   + "<li>" + "Dirección: " + direccion + "</li></ul>" ;

	}else{
		alert("Ingresar datos correctamente");
	}

	document.getElementById("ficha").reset();

	/*

	document.getElementById("nombre").value="";
	document.getElementById("apellido").value="";
	document.getElementById("dni").value="";
	document.getElementById("direccion").value="";
	*/


}