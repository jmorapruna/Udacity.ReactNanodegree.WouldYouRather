import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../../actions/shared'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomePage from '../HomePage/HomePage'
import QuestionPage from '../QuestionPage/QuestionPage'
import NewQuestionForm from '../NewQuestionForm/NewQuestionForm'
import LeaderBoard from '../LeaderBoard/LeaderBoard'
import LoadingCircle from '../LoadingCircle/LoadingCircle'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import NotFound from '../NotFound/NotFound'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

    const Page = loading
      ? <LoadingCircle />
      : (
        <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <PrivateRoute path='/question/:questionId' component={QuestionPage} />
          <PrivateRoute path='/add' component={NewQuestionForm} />
          <PrivateRoute path='/leaderboard' component={LeaderBoard} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      )

    return (
      <Router>
        <Nav />
        {Page}
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
