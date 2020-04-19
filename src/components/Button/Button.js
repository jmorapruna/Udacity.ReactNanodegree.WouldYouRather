import React from 'react'

function Button({ children, isDisabled = false, buttonWasClicked }) {
  return (
    <button
      onClick={buttonWasClicked}
      disabled={isDisabled}>
      {children}
    </button>
  )
}

export default Button
