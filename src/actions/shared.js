import { getApiInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUserId } from './authedUserId'
import { saveApiQuestionAnswer } from '../utils/api'

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

const AUTHED_USER_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    return getApiInitialData()
      .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUserId(AUTHED_USER_ID))
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
