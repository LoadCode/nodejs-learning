
var peticion_http = null;

/*Asignación del evento click después de la carga del documento*/
window.onload = function(){
	var divBoton = document.getElementById('boton');
	divBoton.addEventListener('click', send_payload);
}

// Procesar respuesta
var get_response = function(){
	var divTexto = document.getElementById('respuesta');
	divTexto.innerHTML = peticion_http.responseText;
}

// Enviar payload
var send_payload = function(){
	console.log('send_payload');
	peticion_http = new XMLHttpRequest();
	peticion_http.onreadystatechange = get_response;
	peticion_http.open('GET','/',true);
	peticion_http.send();
}













