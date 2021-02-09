require("dotenv").config();

const express = require("express");
const app = express();

const dbUrl = process.env.DB_URL;

const mongoose = require("mongoose");
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
    console.log("Database connected");
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});
