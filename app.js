const readline = require('readline');
const fs = require('fs');
const { isUtf8 } = require('buffer');

// reading input and writing output
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter your name: ', (name) => {
//     console.log('you entered: '+ name);
//     // .close()is used to close a terminal
//     rl.close();
// })

// // how to pass a message in the close function 
// rl.on('close', () => {
//     console.log('Interface Closed');
//     process.exit(0)
// })

// reading and writing to a file 
// readFileSync executes the next line of code automatically
let textIn = fs.readFileSync('./files/input.txt', 'utf-8');
console.log(textIn)

// writeFileSync
let content = `Date read from input.txt: ${textIn} \nDate created ${new Date()}`
fs.writeFileSync('./files/output.txt',content );
