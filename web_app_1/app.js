var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var Gpio = require('onoff').Gpio;

/*Inicializar elementos*/
var app = express();
var led = new Gpio(17, 'out');


// Configuración de nunjucks
var PATH_TO_TEMPLATES = '.';
nunjucks.configure(PATH_TO_TEMPLATES,{
	autoescape: true,
	express: app
});

// Configuración del uso de middlewares
app.use(express.static(PATH_TO_TEMPLATES));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	return res.render('index.html');
});


var electronics = function(state)
{
	if(state == 'ON')
		led.writeSync(1);
	else if(state == 'OFF')
		led.writeSync(0);
	else if(state == 'CUT')
		led.unexport();
}

var control = function(req, res)
{
	var state = req.body.opcion;
	electronics(state);
	res.render('index.html');
}

app.post('/', control);


app.listen(3000);
