import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
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
    
    return saveQuestion({
      author: authedUserId,
      optionOneText,
      optionTwoText,
    })
      .then(question => dispatch(createQuestion(question)))
      .then(() => cb())
  }
}
