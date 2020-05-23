import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './QuestionPage.scss'
import UnansweredQuestionForm from '../UnansweredQuestionForm/UnansweredQuestionForm'
import AnsweredQuestion from '../AnsweredQuestion/AnsweredQuestion'

function QuestionPage({ question, hasUserAnsweredQuestion }) {

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
  const hasUserAnsweredQuestion = !!users[authedUserId].answers[questionId]

  return {
    question,
    hasUserAnsweredQuestion
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))
