import { getApiInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { saveApiQuestionAnswer } from '../utils/api'
import { setLoading } from '../actions/loading'

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function handleInitialData() {
  return (dispatch) => {
    return getApiInitialData()
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
