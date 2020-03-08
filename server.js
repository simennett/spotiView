// client ID: cc757ad7917846529082686310ed2bd6

var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('./views/index.html', function (err, html) {

    if (err) throw err;    

    console.log("Starting up server")

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});