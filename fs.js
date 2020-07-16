const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req,res) => {
    fs.readFile(path.join(__dirname,'public','sample.html'), (err, data) => {
        if(!err){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
        else{
            console.log(err);
        }
    })
}).listen(3000)


