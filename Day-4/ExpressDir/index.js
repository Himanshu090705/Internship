// // Refer expressjs.com for more info
// // const express = require("express");
// // const app = express();

// // console.dir(app);

// // let port = 8080; //3000 and 8080 are used to make as our custom servers

// // app.listen(port, () => {
// //     console.log(`App is listening on port ${port}`);
// // });

// // app.use(callback func) -> it is used to listen any kind of request whether it is get or post

// // app.use((req, res) => {
// //     console.log("Req received");
// //     res.send("This is a basic response");
// // });

// // Sending a response -> res.send() can send response in any format such as string,array,object etc.

// // app.use((req, res) => {
// //     console.log("Req received");
// //     // res.send("This is a basic response");
// //     // res.send({
// //     //     name: "apple",
// //     //     color: "red",
// //     // });
// //     // let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
// //     // res.send(code);
// // });

// // Routing -> It is process for selcting a path for traffic in a network or between or across multiple networks
// // app.get(path, callback [, callback ...]) -> Routes HTTP GET requests to the specified path with the specified callback functions.
// // For one path there exist only one single response not multiple

// // app.get("/", (req,res) => {
// //     res.send("Hello , i am on gROOT path");
// // });

// // app.get("/pineapple", (req,res) => {
// //     res.send("You contacted pineapple path");
// // });

// // app.get("/orange", (req,res) => {
// //     res.send("You contacted orange path");
// // });

// // app.get("*", (req,res) => {
// //     res.send("This path does not exist");
// // });

// // app.post("/", (req,res) => {
// //     res.send("This is a post request for root");
// // });

// // Nodemon -> To automatically restart server with code changes

// // Path Parameters -> when a variable is used in path is known as path params (such as usernames for different website for this we can't define each every root for particular username via app.get(path) )

// const express = require("express");
// const app = express();

// let port = 3000;

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}`);
// });

// app.get("/", (req, res) => {
//     res.send("Hello, I am gROOT ");
// });

// // app.get("/:username", (req, res) => {
// //     console.log(req.params);
// //     res.send(`Hello user`);
// // });

// app.get("/:username/:id", (req, res) => {
//     let { username, id } = req.params;
//     res.send(`Hello,welcome to the page of @${username}.`);
// });

// // Query strings -> in google passed with q=something to find info about something
// app.get("/search", (req, res) => {
//     // console.log(req.query);
//     let { q } = req.query;
//     if (!q) {
//         // if nothing is written after search
//         res.send(`Nothing searched`);
//     }
//     res.send(`Results for query: ${q} `);
// });

// <------------------------------------------------------------------------------------------>
// Day-5 EJS

