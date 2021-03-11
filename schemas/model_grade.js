const { Decimal128 } = require("bson");
const { link } = require("fs");
const mongoose = require("mongoose");

let Grade = new Schema(
    {
      Grade: {
        type: Decimal128
      },
      AssgnTitle: {
        type: String
      },
      Weights: {
        type: Decimal128
      },
      OverallGrade: {
        type: Decimal128
      }
    },
    { collection: "Grades"}
  );
  module.exports = mongoose.module("Grades", Grade);
  