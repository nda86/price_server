var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

app.post('/getGoods', function (req, res){
	var code = req.body.code;
	console.log(code);
	res.send("Вы отправили: " + code)
});

app.listen(1337, function (){
	console.log('Listening');
})