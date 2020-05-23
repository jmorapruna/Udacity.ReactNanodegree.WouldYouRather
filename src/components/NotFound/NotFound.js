import React from 'react'
import './NotFound.scss'

function NotFound({ children }) {
  return (
    <div className='notFoundPage'>
      <h1>404</h1>
      <div className='content'>
        {
          children
            ? children
            : <div>Sorry, we can't find the page you are looking for.</div>
        }
      </div>
    </div>
  )
}

export default NotFound
