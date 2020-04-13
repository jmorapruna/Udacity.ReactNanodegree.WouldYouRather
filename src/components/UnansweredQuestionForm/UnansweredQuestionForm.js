import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import RadioOptions from '../RadioOptions/RadioOptions'

function UnansweredQuestionForm({ questionId, optionOneText, optionTwoText, userName, avatarURL }) {

  const [selectedOptionId, setSelectedOptionId] = useState('optionOne')

  return (
    <div>
      Would you rather...

      <div>
        <img src={avatarURL} alt={`${userName} profile`} />
        <p>{userName}</p>
      </div>

      <RadioOptions
        options={[
          { text: optionOneText, id: 'optionOne' },
          { text: optionTwoText, id: 'optionTwo' }
        ]}
        checkedOptionId={selectedOptionId}
        checkedOptionIdChanged={setSelectedOptionId} />

      <Button buttonWasClicked={() => { debugger }}>Submit</Button>
    </div>
  )
}

function mapStateToProps(state, props) {
  const { questionId } = props

  const question = state.questions[questionId]
  const optionOneText = question.optionOne.text
  const optionTwoText = question.optionTwo.text

  const user = state.users[state.authedUserId]
  const { name: userName, avatarURL } = user

  return {
    questionId,
    optionOneText, optionTwoText,
    userName, avatarURL
  }
}

export default connect(mapStateToProps)(UnansweredQuestionForm)
