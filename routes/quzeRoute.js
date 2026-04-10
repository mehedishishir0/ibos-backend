const { createTestWithQuestions, getTestWithWuestion, getSingleTestWithQuestion } = require("../controllers/quzeControllers")

const quzeRouter = require("express").Router()


quzeRouter.post("/create",createTestWithQuestions)
quzeRouter.put("/update",createTestWithQuestions)
quzeRouter.get("/get",getTestWithWuestion)
quzeRouter.get("/get/:id", getSingleTestWithQuestion)
module.exports = quzeRouter