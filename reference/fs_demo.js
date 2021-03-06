const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, error => {
    if(error) throw error;
    console.log('Folder created');
});

// Create and write to file

fs.writeFile(
    path.join(__dirname,'/test', 'hello.txt'),
    'Hello World',
    err => {
        if(err) throw err;
        console.log("File Written");
    }
);

// Append to a file
fs.appendFile(
    path.join(__dirname,'/test', 'hello.txt'),
    'Hello World',
    err => {
        if(err) throw err;
        console.log("File Appended");
    }
);

// read file
fs.readFile(
    path.join(__dirname,'/test', 'hello.txt'),
    'utf8',
    (err, data) => {
        if(err) throw err;
        console.log("Data", data);
    }
);

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'test.txt'), err =>{
    if(err) throw err;
    console.log('Renamed');
})