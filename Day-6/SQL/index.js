// To establish connection to mysql write below command for execution
// -> cd "c:\Program Files\MySQL\MySQL Server 8.0"
// -> .\bin\mysql.exe -h localhost -u root -p
// Then write password and enter

// To run code in CLI
// source C:\Users\Himanshu\Desktop\Internship\Day-6\SQL\schema.sql

const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "app",
    password: "Himanshu#369",
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser());
// }

// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();

// Setting up Express App
// GET/ -> Fetch and show total number of users on our app
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

// GET/user -> Fetch and show (id,username,email) of all users on our app
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

// GET/user/:id/edit -> To get form to edit the username ,based on id
//                   -> This form will require a password

// PATCH/user/:id -> To edit username,if correct password was entered in form
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        res.send("Error occurred at DB");
    }
});

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUserName } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Wrong Password");
            } else {
                let q2 = `UPDATE user SET username='${newUserName}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        res.send("Error occurred at DB");
    }
});

app.listen("3000", () => {
    console.log(`App is running on port: 3000`);
});

// Tianna91
// fUMtlzocYzwCcmg;
