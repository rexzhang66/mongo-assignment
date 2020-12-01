const questionsModel = require('../models/quizzes/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (questionId) => questionsModel.findById(questionId)
const findAllQuestionsForQuiz = (qzid) => questionsModel.find({id: qzid})
module.exports = { findAllQuestions, findQuestionById, findAllQuestionsForQuiz }
