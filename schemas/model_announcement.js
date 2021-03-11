const { Decimal128 } = require("bson");
const { link } = require("fs");
const mongoose = require("mongoose");

let Announcement = new Schema(
    {
      AnnTitle: {
        type: String
      },
      AnnDesc: {
        type: String
      },
      AnnDate: {
        type: Date
      }
    },
    { collection: "Announcements"}
  );
  module.exports = mongoose.module("Announcements", Announcement);
  