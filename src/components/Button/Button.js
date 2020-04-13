import React from 'react'

function Button({ children, buttonWasClicked }) {
  return (<button onClick={buttonWasClicked}>
    {children}
  </button>)
}

export default Button
