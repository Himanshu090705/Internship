// Middleware -> It is an intermediary
//            -> Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client.

// Common middleware functions:
// -> methodOverride
// -> bodyParser
// -> express.static
// -> express.urlencoded

// middleware -> make changes to both req and res object
//            -> chaining can possible (call next middleware func in the stack)
//            -> send a res
//            -> execute any code
//            -> end the req-res cycle

// Using next -> the next middleware func is commonly denoted by a variable named next.
//            -> if the current middleware func does not end the req-res cycle,it must call next() to pass control to the next middleware func.

// Creating Utility Middleware
// Logger -> is a function which is used to log (print useful info to cosole) info

const { error } = require("console");
const express = require("express");
const app = express();
const ExpressError = require("./expressError");

// app.use((req, res, next) => {
//     console.log("Hi, I am middleware");
//     // res.send("Middleware finished");
//     next();
//     // console.log("This is after next()");
// });

// logger - morgan
app.use((req, res, next) => {
    req.time = new Date(Date.now().toString());
    console.log(req.method, req.hostname, req.path, req.time); // GET localhost / Invalid Date
    next();
});

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

app.get("/", (req, res) => {
    res.send("Hi, I am gROOT");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

// activity -> API Token as Query String
// create a middle-ware for an api that checks if the access token was passed in the query string or not.

// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

// app.get("/api", (req, res) => {
//     res.send("data");
// });

// Second Method
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED!");
    // throw new Error("ACCESS DENIED!");
    throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

// Errors Chapter
// Handling Errors -> Express Default Error Handler
// If we call next() in error handling middleware then this next() we call next non error handling function.
// app.use((err, req, res, next) => {
//     console.log("-------ERROR--------");
//     next(err); // if we pass error as argument then it will pass to express error handler
// });

app.use((err, req, res, next) => {
    let { status = 500, message = "some error" } = err;
    res.status(status).send(message);
});

app.use((req, res) => {
    res.status(404).send("Page not found!");
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});

// activity -> create an admin route and send error with 403 code.
app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access forbidden");
});
