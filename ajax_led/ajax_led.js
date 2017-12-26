var xhr = null;


var enviar_request = function(e){
	xhr.open('post','/control', true);
	console.log('Fuente: ' + this.id);
	if(this.id == 'encender')
		xhr.send({"state":'ON'});
	else
		xhr.send({"state":'OFF'});
};

// Agregar eventos
window.onload = function(){

	xhr = new XMLHttpRequest();
	document.getElementById('encender').addEventListener('click', enviar_request);
	document.getElementById('apagar').addEventListener('click', enviar_request);
}



