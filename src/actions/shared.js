import * as API from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { saveApiQuestionAnswer } from '../utils/api'
import { setLoading } from '../actions/loading'

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const CREATE_QUESTION = 'CREATE_QUESTION'

export function handleInitialData() {
  return (dispatch) => {
    return API.getApiInitialData()
      .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setLoading(false))
      })
  }
}

function saveQuestionAnswer(authedUserId, questionId, answeredOptionId) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUserId,
    questionId,
    answeredOptionId,
  }
}

export function handleSaveQuestionAnswer(questionId, answeredOptionId) {
  return (dispatch, getState) => {
    const { authedUserId } = getState()

    return saveApiQuestionAnswer(
      authedUserId,
      questionId,
      answeredOptionId
    )
      .then(() => dispatch(saveQuestionAnswer(authedUserId, questionId, answeredOptionId)))
  }
}

function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  }
}

export function handleCreateQuestion(optionOneText, optionTwoText, cb) {
  return (dispatch, getState) => {
    const { authedUserId } = getState()
    
    return API.saveQuestion({
      author: authedUserId,
      optionOneText,
      optionTwoText,
    })
      .then(question => dispatch(createQuestion(question)))
      .then(() => cb())
  }
}
