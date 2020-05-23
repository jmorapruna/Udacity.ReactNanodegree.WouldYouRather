import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { handleInitialData } from '../../actions/shared'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomePage from '../HomePage/HomePage'
import QuestionPage from '../QuestionPage/QuestionPage'
import NewQuestionForm from '../NewQuestionForm/NewQuestionForm'
import LeaderBoard from '../LeaderBoard/LeaderBoard'
import LoginPage from '../LoginPage/LoginPage'
import LoadingCircle from '../LoadingCircle/LoadingCircle'

const Authenticated = () => (
  <Switch>
    <Route exact path='/' >
      <HomePage />
    </Route>
    <Route path='/question/:questionId'>
      <QuestionPage />
    </Route>
    <Route path='/add' >
      <NewQuestionForm />
    </Route>
    <Route path='/leaderboard'>
      <LeaderBoard />
    </Route>
  </Switch>
)

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { isUserAuthenticated, loading } = this.props

    const ActivePage = isUserAuthenticated
      ? <Authenticated />
      : <LoginPage />

    return (
      <Router>
        <Nav />
        {
          loading
            ? <LoadingCircle />
            : ActivePage
        }
      </Router>
    )
  }
}

function mapStateToProps({ authedUserId, loading }) {
  return {
    isUserAuthenticated: !!authedUserId,
    loading,
  }
}

export default connect(mapStateToProps)(App)
