const { Decimal128 } = require("bson");
const { link } = require("fs");
const mongoose = require("mongoose");

let Class = new Schema(
    {
      ClassName: {
        type: String
        },
      AnnNoti: {
        type: Number
      },  
      Emoji: {
        type: String
      }
    },
    { collection: "Classes"}
);
module.exports = mongoose.model("classes", Class);
  