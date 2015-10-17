var express = require('express');
var app = express();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../price_db/mydb.db');


var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

app.post('/getGoods', function (req, res){
	var code = req.body.code;
	console.log(code);
	db.all("SELECT * from goods where code="+code,function(err,rows){
		console.log(rows);
		res.send(rows);
	});
});

app.listen(1337, function (){
	console.log('Listening');
});


//Perform SELECT Operation

//Perform INSERT operation.
// db.run("INSERT into table_name(col1,col2,col3) VALUES (val1,val2,val3)");

//Perform DELETE operation
// db.run("DELETE * from table_name where condition");

//Perform UPDATE operation
// db.run("UPDATE table_name where condition");