const http = require('http');

var formidable = require('formidable');
var url = require('url');
var fs = require('fs');

const fetch = require("node-fetch");


const hostname = '127.0.0.1';
const port = 8081;


const server = http.createServer((req, res) => {
	res.statusCode = 200;
	var q = url.parse(req.url, true);	
	if(q.pathname == "/game"){

   		returnFile(res, "client/gamePage.html");
		
	}else{
		returnFile(res, q);
	}
});


function returnFile(res, q){

    if(q.pathname.endsWith("png")){
			console.log("."+q.pathname);
			fs.readFile("."+q.pathname, function(err, data) {
				if(err) res.end();
				
				res.writeHead(200, {'Content-Type': 'image/png'});
				console.log(data);
				if(data == undefined){
					res.end();
				}else{
					res.write(data);
					res.end();
				}
			});
		}
		
		
		if(q.pathname.endsWith("css")){
			console.log("."+q.pathname);
			fs.readFile("."+q.pathname, function(err, data) {
				if(err) console.log("error");
				res.writeHead(200, {'Content-Type': 'text/css'});
				console.log(data);
				if(data == undefined){
					res.end();
				}else{
					res.write(data);
					res.end();
				}
			});
		}
		
		if(q.pathname.endsWith("html")){
			console.log("."+q.pathname);
			fs.readFile("."+q.pathname, function(err, data) {
				if(err) console.log("error");
				res.writeHead(200, {'Content-Type': 'text/html'});
				console.log(data);
				if(data == undefined){
					res.end();
				}else{
					res.write(data);
					res.end();
				}
			});
		}
		
		if(q.pathname.endsWith("js")){
			console.log("."+q.pathname);
			fs.readFile("."+q.pathname, function(err, data) {
				if(err) console.log("error");
				res.writeHead(200, {'Content-Type': 'text/javascript'});
				console.log(data);
				if(data == undefined){
					res.end();
				}else{
					res.write(data);
					res.end();
				}
			});
		}

}

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
