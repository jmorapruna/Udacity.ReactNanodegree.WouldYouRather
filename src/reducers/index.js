import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUserId from './authedUserId'
import loading from './loading'

export default combineReducers({
  questions,
  users,
  authedUserId,
  loading,
})
