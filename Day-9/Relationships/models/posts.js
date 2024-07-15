const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection Succesful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

const user = mongoose.model("user", userSchema);
const post = mongoose.model("post", postSchema);

const addData = async () => {
    // let user1 = new user({
    //     username: "Unknown",
    //     enail: "email@gmail.com",
    // });

    // let post1 = new post({
    //     content: "New post",
    //     likes: 7,
    // });

    let user1 = await user.findOne({ username: "Unknown" });

    let post2 = new post({
        content: "Bye Bye :)",
        likes: 10,
    });

    post2.user = user1;
    await post2.save();
};

// addData();

const getData = async () => {
    let result = await post.findOne({}).populate("user");
    console.log(result);
};

getData();
