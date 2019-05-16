require('dotenv').config()
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePathBase = './public';
    var filePath = filePathBase + request.url;
    if (filePath == filePathBase + '/') {
        filePath = filePathBase + '/index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html' : 'text/html',
        '.js'   : 'text/javascript',
        '.css'  : 'text/css',
        '.json' : 'application/json',
        '.png'  : 'image/png',
        '.jpg'  : 'image/jpg',
        '.gif'  : 'image/gif',
        '.wav'  : 'audio/wav',
        '.mp4'  : 'video/mp4',
        '.woff' : 'application/font-woff',
        '.ttf'  : 'application/font-ttf',
        '.eot'  : 'application/vnd.ms-fontobject',
        '.otf'  : 'application/font-otf',
        '.svg'  : 'application/image/svg+xml'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                response.writeHead(
                    301,
                    { 'Location': '/404/page.html' }
                );
                response.end(content, 'utf-8');
            } else {
                response.writeHead(500);
                response.end(
                    'Unexpected error, check with the site admin for error:' +
                    '\n' + error.code + ' ..\n');
                response.end();
            }
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(process.env.PORT);

console.log(`Server running at http://127.0.0.1:${process.env.PORT}/`);
