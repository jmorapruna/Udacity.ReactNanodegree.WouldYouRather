import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { setAuthedUserId } from '../../actions/authedUserId'
import { FaBars } from 'react-icons/fa'
import './Nav.scss'

function Nav({ user, dispatch }) {

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  const navClassName = isMobileNavVisible ? 'mainNav active' : 'mainNav'

  const handleLogout = () => {
    dispatch(setAuthedUserId(null))
    setIsMobileNavVisible(false)
  }

  return (
    <nav className='navbar'>
      <span className='navbarToggle' onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}>
        <FaBars />
      </span>

      <Link to='/' className='logo'>Would you rather...</Link>
      <ul className={navClassName}>

        {
          user &&
          <li>
            <span className='userNavItem'>
              <img src={user.avatarURL} alt='avatar' />
                {user.name}
            </span>
          </li>
        }

        <li>
          <NavLink exact to='/' className='navLink' activeClassName='active' onClick={() => setIsMobileNavVisible(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink exact to='/add' className='navLink' activeClassName='active' onClick={() => setIsMobileNavVisible(false)}>New question</NavLink>
        </li>
        <li>
          <NavLink exact to='/leaderboard' className='navLink' activeClassName='active' onClick={() => setIsMobileNavVisible(false)}>Leader board</NavLink>
        </li>

        {
          user &&
          <>
            <li>
              <p className='navLink' onClick={handleLogout}>Logout</p>
            </li>
          </>
        }
      </ul>

    </nav>
  )
}

function mapStateToProps({ authedUserId, users }) {
  return {
    user: users[authedUserId]
  }
}

export default connect(mapStateToProps)(Nav)
