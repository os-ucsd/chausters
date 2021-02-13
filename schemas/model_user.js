const { Decimal128 } = require("bson");
const { link } = require("fs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema(
  {
    FirstName: {
      type: String
    },
    LastName: {
      type: String
    }
    },
  { collection: "Users" }
);

module.exports = mongoose.model("users", user);