const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newFile = function(file) {
  fs.mkdir(file)
}

rl.question('Enter files to create: ', (files) => {
  files.split(' ').forEach(file => {
    newFile(file);
  })
  rl.close();
});


// fs.mkdir('./jsFiles/fs-mkdir-test')
