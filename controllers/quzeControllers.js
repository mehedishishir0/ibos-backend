const Test = require("../model/quzeModel");
const TestModel = require("../model/quzeModel");

const createTestWithQuestions = async (req, res) => {
  try {
    const payload = req.body;

    const result = await TestModel.create(payload);

    res.status(201).json({
      success: true,
      message: "Test and questions created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create test",
      error: error.message,
    });
  }
};

const getTestWithWuestion = async (req, res) => {
  try {
    const data = await Test.find();

    res.status(200).json({
      success: true,
      message: "Get successfully",
      data: data,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get test",
      error,
    });
  }
};

const getSingleTestWithQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Test.findById(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Test not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get test",
      error,
    });
  }
};

const updateTestWithQuestions = async (req, res) => {
  try {
    const { testId } = req.params;

    const updatedTest = await Test.findByIdAndUpdate(testId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Test updated successfully",
      data: updatedTest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update test",
      error,
    });
  }
};

module.exports = { createTestWithQuestions, updateTestWithQuestions, getTestWithWuestion, getSingleTestWithQuestion };
