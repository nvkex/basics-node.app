const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname, 'public',
        req.url === '/' ? 'index.html' : req.url
    );

    
    // Fle extension
    let extname = path.extname(filePath);
    console.log(filePath);
    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/jvascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname), 'public', '404.html', (error, data) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data, 'utf8');
                });
            }
            else{
                res.writeHead(500);
                res.end('Server Error');
            }
        }
        else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(PORT));