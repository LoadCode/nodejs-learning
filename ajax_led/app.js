var express = require('express');
var Gpio    = require('onoff').Gpio;
var bodyParser = require('body-parser');

var app = express();
var led = new Gpio(17, 'out');
var PATH_TO_TEMPLATES = '.';

// Usar el middleware para server los archivos estáticos
app.use(express.static(PATH_TO_TEMPLATES));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var control = function(req, res){
	var state = req.body.state;
	if(state == 'ON')
		led.writeSync(1);
	else if(state == 'OFF')
		led.writeSync(0);
	else 
		led.unexport();
}

app.get('/',function(req, res){
	res.render('index.html');
});

app.post('/control', control);
app.listen(3000);

