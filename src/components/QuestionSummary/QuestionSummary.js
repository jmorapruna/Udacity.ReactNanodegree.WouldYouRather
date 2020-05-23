import React from 'react'
import { connect } from 'react-redux'
import './QuestionSummary.scss'
import { Link } from 'react-router-dom'

function QuestionSummary({
  questionId, questionText,
  userName, avatarURL
}) {
  return (
    <div className='questionSummary'>
      <div className='user'>
        <img className='avatarImage' src={avatarURL} alt={`${userName} profile`} />
        <p className='userName'>{userName}</p>
      </div>
      <Link to={`/question/${questionId}`} className='balloon'>
        <p className='questionPrefix'>Would yot rather</p>
        <p className='questionText'>{questionText} or...</p>
      </Link>
    </div>
  )
}

function mapStateToProps(state, props) {
  const { questionId } = props
  const question = state.questions[questionId] || {}
  const user = state.users[question.author] || {}

  const questionText = (question.optionOne && question.optionOne.text) || ''
  const {
    name: userName,
    avatarURL
  } = user

  return {
    questionId, questionText,
    userName, avatarURL
  }
}

export default connect(mapStateToProps)(QuestionSummary)
