import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { handleInitialData } from '../../actions/shared'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

    return (
      <Router>
        <div>
          {
            !loading && (
              <Switch>
                <Route exact path='/' >
                  <HomePage />
                </Route>
              </Switch>
            )
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUserId }) {
  return {
    loading: !authedUserId
  }
}

export default connect(mapStateToProps)(App)
