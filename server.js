var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');


var route = require('./routes/routes.js')(app);
app.listen(9000, function() {
    console.log("Listening on Port 9000 ");
})