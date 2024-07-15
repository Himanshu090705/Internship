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
    addresses: [
        {
            _id: false, // mongo automatically add id for each individual address to avoid this statement is written
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
    let user1 = new User({
        username: "SherlockHolmes",
        addresses: [{ location: "221B Baker Street", city: "London" }],
    });
    user1.addresses.push({ location: "P32 Wallstreet", city: "London" });

    let result = await user1.save();
    console.log(result);
};

addUser();
