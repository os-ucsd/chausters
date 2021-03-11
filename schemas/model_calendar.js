const { Decimal128 } = require("bson");
const { link } = require("fs");
const mongoose = require("mongoose");

let Calendar = new Schema(
    {
      CurrentDate:{
        type: Date
      },
      Class: ClassSchema,
      HaveClass: {
        type: Boolean
      },
      ClassTime: {
        type: String
      },
      Assignment: AssignmentSchema,
      DueDate: AssignemntSchema
    },
    { collection: "Calendar"}
  );
  module.exports = mongoose.module("Calendar", Calendar);