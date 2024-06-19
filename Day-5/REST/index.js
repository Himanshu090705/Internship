// REST(Representational State Transfer) -> is an architectural style that defines a set of constraints to be used for creating web services.

// CRUD operations ->
// GET    -> retrieves resources.
// POST   -> submits new data to the server
// PUT    -> updates existing data
// PATCH  -> update existing data partially
// DELETE -> removes data

// Creating RESTful APIs ->
// GET      /posts        to get data for all posts
// POST     /posts        to add a new post
// GET      /posts/:id    to get one post (using id)
// PATCH    /posts/:id    to update specific post
// DELETE   /posts/:id    to delete specific post

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "person1",
        content: "I love coding",
    },
    {
        id: uuidv4(),
        username: "person2",
        content: "I love coding too!",
    },
    {
        id: uuidv4(),
        username: "person3",
        content: "I love coding too,three!",
    },
];

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// Implement: POST/posts -> create new routes
// POST     /posts        to add a new post

// 2 routes
// 1) serve the form       GET     /posts/new
// 2) add the new post     POST    /posts

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// Implement: GET/posts/:id -> show routes
// GET      /posts/:id    to get one post (using id)

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id); // if user enter wrong id then also it will get printed to avoid that this should be there
    res.render("show.ejs", { post });
});

// Create id for posts -> UUID(Universally Unique Identifier) package

// Implement: PATCH/posts/:id -> Update routes
// PATCH    /posts/:id    to update specific post

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

// Create form for update -> Edit route
// Serve the edit form GET /posts/:id/edit

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

// Implement: /posts/:id -> Destroy routes
// DELETE   /posts/:id    to delete specific post

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});
