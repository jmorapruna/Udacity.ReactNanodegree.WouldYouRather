import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA'

export function getApiInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ])
}

export function saveApiQuestionAnswer(authedUserId, questionId, answeredOptionId) {
  return _saveQuestionAnswer({
    authedUser: authedUserId,
    qid: questionId,
    answer: answeredOptionId
  })
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}
