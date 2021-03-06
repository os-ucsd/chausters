const { Decimal128 } = require("bson");
const { link } = require("fs");
const mongoose = require("mongoose");

let Link = new Schema(
    {
      ZoomLink: {
        type: String
      },
      ClassPage: {
        type: String
      },
      PiazzaLink: {
        type: String
      },
      OtherLink: {
          type: [OtherLinks],
          default: undefined
      }
    },
    { collection: "Links"}
  );
  module.exports = mongoose.module("Links", Link);
