import React from 'react'
import { withRouter } from 'react-router-dom'

function Button({ children, url, history }) {
  return (<button onClick={() => history.push(url)}>
    {children}
  </button>)
}

export default withRouter(Button)
