import React, { useState } from 'react'
import { connect } from 'react-redux'
import Dropdown from '../Dropdown/Dropdown'
import Button from '../Button/Button'
import { setAuthedUserId } from '../../actions/authedUserId'
import { withRouter } from 'react-router-dom'
import './LoginPage.scss'

function LoginPage({ users, dispatch, history }) {
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [showMissingUserError, setShowMissingUserError] = useState(false)

  function handleLoginButtonWasClicked() {
    if (selectedUserId) {
      dispatch(setAuthedUserId(selectedUserId))
      history.push('/')
    } else {
      setShowMissingUserError(true)
    }
  }

  return (
    <div className='loginPage'>
      <h1>Login</h1>

      <p className='please-select'>Please select a user to login:</p>

      <Dropdown
        placeholder='Select a user...'
        anOptionWasSelected={({ key }) => setSelectedUserId(key)}
        options={
          users.map(u => ({
            key: u.id,
            text: u.name,
            imageURL: u.avatarURL,
          }))
        } />

      {
        showMissingUserError &&
        <p className='missing-user-error'>The user is required. Please select a user.</p>
      }

      <Button isDisabled={!selectedUserId} buttonWasClicked={handleLoginButtonWasClicked}>Login</Button>
    </div>
  )
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  }
}

export default withRouter(connect(mapStateToProps)(LoginPage))
