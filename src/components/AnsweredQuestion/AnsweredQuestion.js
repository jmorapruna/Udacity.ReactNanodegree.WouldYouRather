import React from 'react'
import { connect } from 'react-redux'

function AnsweredQuestion({ userName, avatarURL, options }) {
  const totalVotes = options[0].votes + options[1].votes

  return (
    <div>
      <div>
        <img src={avatarURL} alt={`${userName} profile`} />
        <p>{userName}</p>
      </div>

      {
        options.map((option, i) => (
          <div key={i}>
            <p>{option.text}</p>
            <p>{option.votes} out of {totalVotes} votes</p>
            {option.votedByAuthedUser && <p>(you voted this answer!)</p>}
          </div>
        ))
      }
    </div>
  )
}

function mapStateToProps(state, { question }) {
  const optionOne = question.optionOne
  const optionTwo = question.optionTwo

  const { name: userName, avatarURL } = state.users[question.author]
  const optionIdAnsweredByUser = state.users[state.authedUserId].answers[question.id]

  return {
    userName, avatarURL,
    options: [
      {
        text: optionOne.text,
        votes: optionOne.votes.length,
        votedByAuthedUser: optionIdAnsweredByUser === 'optionOne'
      },
      {
        text: optionTwo.text,
        votes: optionTwo.votes.length,
        votedByAuthedUser: optionIdAnsweredByUser === 'optionTwo'
      },
    ],
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)
