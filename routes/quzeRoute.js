const { createTestWithQuestions, getTestWithWuestion, getSingleTestWithQuestion, updateTestWithQuestions } = require("../controllers/quzeControllers")

const quzeRouter = require("express").Router()


quzeRouter.post("/create",createTestWithQuestions)
quzeRouter.put("/update/:id",updateTestWithQuestions)
quzeRouter.get("/get",getTestWithWuestion)
quzeRouter.get("/get/:id", getSingleTestWithQuestion)
module.exports = quzeRouter