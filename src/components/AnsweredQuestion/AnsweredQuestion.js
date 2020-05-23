import React from 'react'
import { connect } from 'react-redux'
import './AnsweredQuestion.scss'
import PercentageBar from '../PercentageBar/PercentageBar'

function AnsweredQuestion({ authedUser, author, options }) {
  const totalVotes = options[0].votes + options[1].votes

  return (
    <div className='answeredQuestion'>
      <div className='user'>
        <img className='avatar' src={author.avatarURL} alt={`${author.name} profile`} />
        <p className='asksText'>{author.name} asks:</p>
      </div>

      <p className='wouldYouRather'>Would you rather...</p>
      {
        options.map((option, i) => (
          <div key={i} className='option'>
            <p className='optionText'>{option.text}</p>

            <div className='percentageAvatarWrap'>
              <PercentageBar ratio={option.votes / totalVotes} />
              {
                option.votedByAuthedUser && <img src={authedUser.avatarURL} alt={`${author.name} avatar`} className='avatar' />
              }
            </div>

            <p className='votesText'>
              <span>{option.votes} / {totalVotes} votes {
                option.votedByAuthedUser &&
                <span>(one is yours)</span>
              }</span>
            </p>
          </div>
        ))
      }
    </div>
  )
}

function mapStateToProps(state, { question }) {
  const optionOne = question.optionOne
  const optionTwo = question.optionTwo

  const author = state.users[question.author]
  const authedUser = state.users[state.authedUserId]
  const optionIdAnsweredByUser = authedUser.answers[question.id]

  return {
    author,
    authedUser,
    options: [
      {
        text: optionOne.text,
        votes: optionOne.votes.length,
        votedByAuthedUser: optionIdAnsweredByUser === 'optionOne'
      },
      {
        text: 'or ' + optionTwo.text,
        votes: optionTwo.votes.length,
        votedByAuthedUser: optionIdAnsweredByUser === 'optionTwo'
      },
    ],
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)
