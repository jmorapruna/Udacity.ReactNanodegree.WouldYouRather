import { RECEIVE_QUESTIONS } from '../actions/questions'
import { SAVE_QUESTION_ANSWER } from '../actions/shared'

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
    
    default:
      return state
  }
}
