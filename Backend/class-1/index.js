
console.log("my name is harii ramm");

// Node.js
console.log("It's working");

// Import modules
const math = require("./math");
const fs = require("fs");

// custom modules
console.log(math.add(5, 6));
console.log(math.sub(11, 6));
console.log(math.mul(11, 6));
console.log(math.div(11, 6));


// in-built modules
console.log(fs);

//write file
fs.writeFileSync("notes.txt", "I am learning backend\n");

// append : add the string end of the file
fs.appendFileSync("notes.txt", "It's part of MERN ");

// read :
const data = fs.readFileSync("notes.txt");
console.log(data.toString());

// create folder :
fs.mkdirSync("file.js");

// rename :
fs.renameSync("file.js", "node.js");

// delete
fs.rmdirSync("node.js");
