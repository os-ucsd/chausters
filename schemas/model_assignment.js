const { Decimal128 } = require("bson");
const { link } = require("fs");
const mongoose = require("mongoose");

let Assignment = new Schema(
    {
      AssgnTitle: {
        type: String
      },
      AssgnDesc: {
        type: String
      },
     DueDate: {
       type: Date
     } 
    },
    { collection: "Assignments"}
  );
  module.exports = mongoose.model("Assignments", Assignment);