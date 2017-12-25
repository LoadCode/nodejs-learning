var express = require('express');
var app = express();
var i = 1;

app.use(express.static('.'));

var manejador = function(req, res){
	res.send('Contador Server: ' + i);
	i++;
}

app.get('/', manejador)

app.listen(3000);

