var path = require('path');
var express = require('express');

var app = express();

app.use('/static', express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

const PORT = 3006;

console.log('Starting express server on port: ', PORT);
app.listen(PORT);
