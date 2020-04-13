import { _getUsers, _getQuestions, _saveQuestionAnswer } from './_DATA'

export function getApiInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ])
}

export function saveApiQuestionAnswer({ authedUserId, questionId, answeredOptionId }) {
  return _saveQuestionAnswer({
    authedUser: authedUserId,
    qid: questionId,
    answer: answeredOptionId
  })
}
