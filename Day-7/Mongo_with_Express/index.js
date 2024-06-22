const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then((res) => {
        console.log("Connection Succesful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.listen(3000, () => {
    console.log("Port is listening on port: 3000");
});

app.get("/", (req, res) => {
    res.send("Root is working");
});

// Index route
app.get("/chats", async (req, res) => {
    try {
        let chats = await chat.find();
        res.render("index.ejs", { chats });
    } catch (err) {
        console.error("Error fetching chats: ", err);
    }
});

// New and Create route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat
        .save()
        .then((res) => {
            console.log("Chat saved.");
        })
        .catch((err) => {
            console.log(err);
        });
    res.redirect("/chats");
});

// Edit and Update route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let newChat = await chat.findById(id);
    res.render("edit.ejs", { newChat });
});

app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    res.redirect("/chats");
});

// Destroy route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;

    let deletedChat = await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});
