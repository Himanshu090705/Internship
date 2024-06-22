// // Mongoose -> A library that creates a connection between MongoDB and Node.js
// //          -> It is an ODM(Object Data Modeling) Library.

// const mongoose = require("mongoose");

// main()
//     .then(() => {
//         console.log("Connection succesful");
//     })
//     .catch((err) => console.log(err));

// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/test");
// }

// // Schema -> Schema defines the shape of the documents within that Collection.

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
// });

// // Models -> is a class with which we construct documents.
// // const modelName = mongoose.model("CollectionName", schemaName); // there should be modelname = collectionname
// const User = mongoose.model("User", userSchema);

// // INSERT -> insert one
// const user1 = new User({
//     name: "Adam",
//     email: "adam@gmail.com",
//     age: 48,
// });

// // user1.save();

// const user2 = new User({
//     name: "Eve",
//     email: "eve@gmail.com",
//     age: 45,
// });

// // user2
// //     .save()
// //     .then((res) => {
// //         console.log(res);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// // User.insertMany([
// //     { name: "Tony", email: "tony@gmail.com", age: 50 },
// //     { name: "Peter", email: "peter@gmail.com", age: 30 },
// //     { name: "Bruce", email: "bruce@gmail.com", age: 40 },
// // ]).then((res) => {
// //     console.log(res);
// // });

// // Mongoose uses Operation Buffering -> Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.

// // FIND -> Model.find() // Returns a query object (thennable)
// // Mongoose Queries are not promises. But they have a .then()

// // User.find({ age: { $gt: 45 } })
// //     .then((res) => {
// //         // console.log(res);
// //         // console.log(res[0]);
// //         // console.log(res[0].name);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// // User.findOne({ age: { $gt: 45 } })
// //     .then((res) => {
// //         console.log(res);
// //         // console.log(res[0]);
// //         // console.log(res[0].name);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// // User.updateOne({ name: "Bruce" }, { age: 57 })
// //     .then((res) => {
// //         console.log(res);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// // User.findOneAndUpdate({ name: "Bruce" }, { age: 42 }, { new: true })
// //     .then((res) => {
// //         console.log(res);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// // User.deleteOne({ name: "Bruce" })
// User.deleteMany({ age: 48 })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // User.findOneAndDelete(); // both work same as which we used in update
// // User.findByIdAndDelete();

// Schema Validations
const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.127017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
        default: 100,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
});
