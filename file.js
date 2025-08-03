// create a file sysytem using create update delete system in nod e js
const fs = require('fs');

// CLI tool using to create a file
fs.writeFileSync('hello.txt', 'Hello World!');
fs.writeFileSync('Hi.txt','Hi World!');

//Read a file
const read = fs.readFileSync('hello.txt', 'utf8');
console.log('File Read:',"i am using only read this content" );

// update a file
const updatedata = require('fs');
fs.renameSync('hello.txt', ' hello_updated.txt')

// delete a file
fs.unlinkSync('hello.txt', (err) => {
    if (err) throw err;
    console.log('hello.txt was deleted');
});




    



