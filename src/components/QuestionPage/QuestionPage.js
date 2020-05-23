import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './QuestionPage.scss'
import UnansweredQuestionForm from '../UnansweredQuestionForm/UnansweredQuestionForm'
import AnsweredQuestion from '../AnsweredQuestion/AnsweredQuestion'
import NotFound from '../NotFound/NotFound'

function QuestionPage({ question, questionWasNotFound, hasUserAnsweredQuestion }) {

  if (questionWasNotFound)
    return (<NotFound>
      Sorry, we can't find the question you are looking for.
    </NotFound>)

  return (
    <div className='questionPage'>
      {
        hasUserAnsweredQuestion
          ? <AnsweredQuestion question={question} />
          : <UnansweredQuestionForm question={question} />
      }
    </div>
  )
}

function mapStateToProps(state, props) {
  const { questions, authedUserId, users } = state
  const { questionId } = props.match.params

  const question = questions[questionId]
  const questionWasNotFound = !question
  
  const hasUserAnsweredQuestion = !!users[authedUserId].answers[questionId]

  return {
    question,
    questionWasNotFound,
    hasUserAnsweredQuestion
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))
