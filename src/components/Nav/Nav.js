import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuthedUserId } from '../../actions/authedUserId'

function Nav({ user, dispatch }) {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/new'>New question</Link>
      <Link to='/leaderboard'>Leader board</Link>

      {user && <div>
        <p>{user.name}</p>
        <p onClick={() => dispatch(setAuthedUserId(null))}>Logout</p>
      </div>}
    </nav>
  )
}

function mapStateToProps({ authedUserId, users }) {
  return {
    user: users[authedUserId]
  }
}

export default connect(mapStateToProps)(Nav)
