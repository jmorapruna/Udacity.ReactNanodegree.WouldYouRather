import { RECEIVE_USERS } from '../actions/users'
import { SAVE_QUESTION_ANSWER, CREATE_QUESTION } from '../actions/shared'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users

    case SAVE_QUESTION_ANSWER: {
      const { authedUserId, questionId, answeredOptionId } = action

      return {
        ...state,
        [authedUserId]: {
          ...state[authedUserId],
          answers: {
            ...state[authedUserId].answers,
            [questionId]: answeredOptionId
          }
        }
      }
    }

    case CREATE_QUESTION: {
      const { question } = action
      const newQuestionAuthorId = question.author
      
      return {
        ...state,
        [newQuestionAuthorId]: {
          ...state[newQuestionAuthorId],
          questions: [...state[newQuestionAuthorId].questions, question.id]
        }
      }
    }

    default:
      return state
  }
}
