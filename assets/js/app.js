
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

	document.getElementById("nombre").value="";
	document.getElementById("apellido").value="";
	document.getElementById("dni").value="";
	document.getElementById("direccion").value="";


}