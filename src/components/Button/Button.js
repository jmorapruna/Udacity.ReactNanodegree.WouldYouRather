import React from 'react'
import './Button.scss'

function Button({ children, isDisabled = false, isLoading = false, buttonWasClicked }) {
  return (
    <div
      className='button'
      onClick={() => !isLoading && buttonWasClicked()}
      disabled={isDisabled}>
      {
        isLoading
          ? <div className='loadingSpinner' />
          : children
      }
    </div>
  )
}

export default Button
