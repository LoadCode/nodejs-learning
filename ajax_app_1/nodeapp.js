var express = require('express');
var app = express();
var i = 1;

app.use(express.static('.'));

var manejador = function(req, res){
	res.send("Contador: " + i);
	i++;
};

app.get('/responder_ajax', manejador);

app.listen(3000);

