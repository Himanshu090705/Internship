// Node.js -> javascript runtime environment
//         -> it is used for server side programming

// Node.js is not a language,library or framework

// node REPL(read,evaluate,print,loop) -> for execute the code of js through node we can simply write node before filename.js
//             such as, node filename.js

// process -> This object provides information about, and control over, the current node.js process
// process.argv -> returns an array containing the command line arguments passed when the node.js process was launched

// module.exports -> requiring files

// require() -> a built-in function to include external modules that exist in seperate files.
// module.exports -> a special object

// let someVal = require("./math"); // by default it will send empty object if we can't define module.exports in other file
// let math = require("./math");
// console.log(math);

//requiring files
// let info = require("./fruit");  // here require will try to find index.js file to execute
// console.log(info);

// NPM (Node Package Manager) -> npm is standard package manager for Node.js
// 1) library of packages (package means a peice of code which is already written by someone else and openly available for public usage)
// 2) command line tool

// installing packages
// npm install <- package_name ->
// node_modules -> this contains every installed dependency for your project.
// package-lock.json -> it records the exact version of every installed dependancy, including their sub-dependancies and versions
// package.json -> this file contain descriptive and functional metadata about project ,such as name,version and dependencies
// npm init -> used to create own packages
// npm install -g <- package_name -> - to install package globally not a good practise rather install it locally
// npm link <- package_name -> - after installing it globally we have to link it

// require v/s import 
// import {sum} from "./math.js"
// we can't selectively load only required piece of code using require, but with import we can selectively load required piece of code, which can save memory  
// loading is synchronous for require, but asynchronous for import