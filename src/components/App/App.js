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

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

    return (
      <Router>
        <Nav />
        {
          !loading && (
            <Switch>
              <Route exact path='/' >
                <HomePage />
              </Route>
              <Route path='/question/:questionId'>
                <QuestionPage />
              </Route>
              <Route path='/new' >
                <NewQuestionForm />
              </Route>
              <Route path='/leaderboard'>
                <LeaderBoard />
              </Route>
            </Switch>
          )
        }
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
