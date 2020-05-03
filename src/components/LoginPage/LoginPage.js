import React, { useState } from 'react'
import { connect } from 'react-redux'
import Dropdown from '../Dropdown/Dropdown'
import Button from '../Button/Button'
import { setAuthedUserId } from '../../actions/authedUserId'
import { withRouter } from 'react-router-dom'

function LoginPage({ users, dispatch, history }) {
  const [selectedUserId, setSelectedUserId] = useState(null)

  function handleLoginButtonWasClicked() {
    dispatch(setAuthedUserId(selectedUserId))
    history.push('/')
  }

  return (
    <div>
      <Dropdown
        placeholder='Select a user...'
        anOptionWasSelected={({key}) => setSelectedUserId(key)}
        options={
          users.map(u => ({
            key: u.id,
            text: u.name,
            imageURL: u.avatarURL,
          }))
        } />

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
