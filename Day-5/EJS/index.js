// Templating -> fixed layout by which we can create multiple pages
// EJS(Embedded JavaScript Templates) -> is a simple templating language that lets you generate HTML markup using plain JS

const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.set("view engine", "ejs");
app.set("path", path.join(__dirname, "/views")); // this we are writing because if run server on the parent of ejs then it will look for views folder in ejs's parent folder to avoid this line should be there,here __dirname=current working dir of index.js (day-5/ejs/views)

app.get("/", (req, res) => {
    // res.send("This is home page");
    res.render("home.ejs"); // how the express will know that which home.ejs we are talking about? the answer is express will automatically search for views folder in which it will search for particular file
    // res.render("home");// if we don't write .ejs extension then also it will work for same
});

app.listen(port, () => {
    console.log(`Listening on the port: ${port}`);
});

// Interpolation syntax -> refers to embedding expressions into marked up text
// for code refer home.ejs

// passing data to EJS
app.get("/rollDice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1; // let assume this data comes from database
    // res.render("rollDice.ejs", { num: diceVal }); // here we got data from db now we are passing this data to .ejs file for accessment through an object
    res.render("rollDice.ejs", { diceVal }); // if we want to give same key name and value then we have to pass only one value to the object
});

// Instagram EJS -> create a basic template for instagram page based on the following route:/ig/:username

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const followers = ["adam", "bob", "steve", "watson"];

    const instaData = require("./data.json");
    const data = instaData[username]; //by appling square brackets only that particular username data will be passed
    if (data) {
        res.render("instagram.ejs", { username, followers, data });
    } else {
        res.render("error.ejs");
    }
});
