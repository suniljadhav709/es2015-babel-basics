var express = require('express');


var app = express();

app.get('/', function(req, res) {
    res.json({ 'Status': 'success' });
});

app.listen(3000, function() {
    console.log('Your server is now listening to port 3000!.');
})