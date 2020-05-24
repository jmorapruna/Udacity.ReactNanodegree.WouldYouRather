import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'

const PrivateRoute = ({ component: Component, authedUserId, ...rest }) => (
  <Route {...rest} render={(props) => {
    return (
      authedUserId
        ? <Component {...props} />
        : <LoginPage />
    )
  }} />
)

function mapStateToProps({ authedUserId }) {
  return {
    authedUserId
  }
}

export default connect(mapStateToProps)(PrivateRoute)
