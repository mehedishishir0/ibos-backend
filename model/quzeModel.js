const mongoose = require("mongoose");
const { Schema } = mongoose;

const optionSchema = new Schema({
  text: {
    type: String,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
});

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["checkbox", "radio", "text"],
    required: true,
  },

  options: [optionSchema],

  textAnswer: {
    type: String,
  },

  score: {
    type: Number,
    required: true,
  },
});

const testSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    totalCandidates: {
      type: Number,
      required: true,
    },

    totalSlots: {
      type: Number,
      required: true,
    },

    totalQuestionSet: {
      type: Number,
      required: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    questions: [questionSchema],
  },
  { timestamps: true }
);

const Test = mongoose.model("Test", testSchema);

module.exports = Test;