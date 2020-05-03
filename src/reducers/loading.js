import { SET_LOADING } from '../actions/loading'

function loading(state = true, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.value
    default:
      return state
  }
}

export default loading
