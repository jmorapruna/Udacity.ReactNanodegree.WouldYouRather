import React from 'react'
import { connect } from 'react-redux'
import LoginPage from '../LoginPage/LoginPage'

function PageOrLogin({ authedUserId, children }) {
  return authedUserId
    ? children
    : <LoginPage />
}

function mapStateToProps({ authedUserId }) {
  return {
    authedUserId
  }
}

export default connect(mapStateToProps)(PageOrLogin)
