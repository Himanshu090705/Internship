const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection Succesful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "order",
        },
    ],
});

let order = mongoose.model("order", orderSchema);
let customer = mongoose.model("customer", customerSchema);

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("Pre middleware");
// });

// customerSchema.post("findOneAndDelete", async () => {
//     console.log("Post middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let res = await order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
});

// const findCustomer = async () => {
//     // let result = await customer.find({}); // this will show only id of order
//     // Populate -> is used when we need to extract whole data of object rather not id
//     let result = await customer.find({}).populate("orders"); // this will show whole order object
//     console.log(result);
// };

// findCustomer();

// const addCustomer = async () => {
//     let cust1 = new customer({
//         name: "Unknown",
//     });

//     let order1 = await order.findOne({ item: "Chips" });
//     let order2 = await order.findOne({ item: "Chocolate" });

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// };

// addCustomer();

// const addOrders = async () => {
//     let result = await order.insertMany([
//         { item: "Samosa", price: 12 },
//         { item: "Chips", price: "10" },
//         { item: "Chocolate", price: "5" },
//     ]);
//     console.log(result);
// };

// addOrders();

// handling deletion
const addCust = async () => {
    const newCust = new customer({
        name: "demo1",
    });

    const newOrder = new order({
        item: "Pizza",
        price: 250,
    });

    newCust.orders.push(newOrder);

    await newCust.save();
    await newOrder.save();

    console.log("Added new customer");
};

addCust();
