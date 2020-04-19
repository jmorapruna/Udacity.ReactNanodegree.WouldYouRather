import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/new'>New question</Link>
      <Link to='/leaderboard'>Leader board</Link>
    </nav>
  )
}

export default Nav