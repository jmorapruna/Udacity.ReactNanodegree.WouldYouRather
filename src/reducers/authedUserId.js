import { SET_AUTHED_USER_ID } from '../actions/authedUserId'

export default function authedUserId(state = null, action) {
  switch (action) {
    case SET_AUTHED_USER_ID:
      return action.userId
    default:
      return state
  }
}
