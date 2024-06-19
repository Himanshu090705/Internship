// Get & Post request

// Get -> Used to get some response
//     -> Data send in query strings (limited, string data & visible in URL)

// Post -> Used to post something (for create/write/update)
//      -> Data send via request body (any type of data)

const express = require("express");
const app = express();

let port = 3000;

app.use(express.urlencoded({ extended: true })); // to parse urlencoded data
app.use(express.json()); // to parse json data

app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send(`Standard GET response, Hello ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, pass } = req.body; // returns data in form of object
    res.send(`Standard POST response, Hello ${user}!`);
});

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});

// Handling POST request
// 1) set up POST request route to get some express.response
// 2) parse POST request data
