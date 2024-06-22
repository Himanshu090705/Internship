const mongoose = require("mongoose");
const chat = require("./models/chat.js");

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

chat.insertMany([
    {
        from: "neha",
        to: "priya",
        msg: "Send me IMP",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "preeti",
        msg: "Send me Notes",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all teh best!",
        created_at: new Date(),
    },
    {
        from: "anita",
        to: "ramesh",
        msg: "bring me some fruits",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        msg: "love you 3000",
        created_at: new Date(),
    },
]);
