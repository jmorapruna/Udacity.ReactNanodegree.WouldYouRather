import React from 'react'
import { connect } from 'react-redux'
import medal1Url from './images/1-medal.png'
import medal2Url from './images/2-medal.png'
import medal3Url from './images/3-medal.png'

function LeaderBoardUser({ user, medalUrl, numOfAnsweredQuestions, numOfCreatedQuestions, score }) {

  return (
    <div>
      {medalUrl && <img src={medalUrl} alt='medal' />}
      <img src={user.avatarURL} alt={`${user.name} avatar`} />
      <div>
        <p>{user.name}</p>
        <p>Answered questions <span>{numOfAnsweredQuestions}</span></p>
        <p>Created questions <span>{numOfCreatedQuestions}</span></p>
      </div>
      <div>
        <p>Score</p>
        <p>{score}</p>
      </div>
    </div>
  )
}

function getMedalUrl(position) {
  switch (position) {
    case 0:
      return medal1Url
    case 1:
      return medal2Url
    case 2:
      return medal3Url
    default:
      return undefined
  }
}

function LeaderBoard({ leaderboard }) {
  return (
    <div>
      {
        leaderboard.map((item, index) => {
          let medalUrl = getMedalUrl(index);

          return <LeaderBoardUser
            key={item.user.id}
            user={item.user}
            medalUrl={medalUrl}
            numOfAnsweredQuestions={item.numOfAnsweredQuestions}
            numOfCreatedQuestions={item.numOfCreatedQuestions}
            score={item.score} />;
        })
      }
    </div>
  )
}

function mapStatToProps(state) {
  const users = Object.values(state.users);

  const leaderboard = users.map(u => {
    const numOfAnsweredQuestions = Object.keys(u.answers).length
    const numOfCreatedQuestions = u.questions.length

    return {
      user: u,
      numOfAnsweredQuestions,
      numOfCreatedQuestions,
      score: numOfAnsweredQuestions + numOfCreatedQuestions,
    }
  })
    .sort((u1, u2) => (u2.score - u1.score) || (u2.numOfAnsweredQuestions - u1.numOfAnsweredQuestions))

  return {
    leaderboard,
  }
}

export default connect(mapStatToProps)(LeaderBoard)
