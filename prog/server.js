/* An express server that supports get and post routes for and Angularjs Controller*/

var express = require ('express');
var bodyParser = require ('body-parser');
var app = express();
app.use('/', express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(1800);



