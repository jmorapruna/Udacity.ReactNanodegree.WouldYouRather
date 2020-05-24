import { RECEIVE_QUESTIONS } from '../actions/questions'
import { SAVE_QUESTION_ANSWER, CREATE_QUESTION } from '../actions/shared'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions

    case SAVE_QUESTION_ANSWER: {
      const { authedUserId, questionId, answeredOptionId } = action

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answeredOptionId]: {
            ...state[questionId][answeredOptionId],
            votes: state[questionId][answeredOptionId].votes.concat([authedUserId])
          }
        }
      }
    }

    case CREATE_QUESTION: {
      const { question } = action

      return {
        ...state,
        [question.id]: question
      }
    }
    
    default:
      return state
  }
}
