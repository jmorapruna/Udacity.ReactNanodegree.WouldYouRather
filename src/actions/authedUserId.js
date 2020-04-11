export const SET_AUTHED_USER_ID = 'SET_AUTHED_USER_ID'

export function setAuthedUserId(userId) {
  return  {
    type: SET_AUTHED_USER_ID,
    userId
  }
}
