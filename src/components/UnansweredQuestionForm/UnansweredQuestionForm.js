import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import RadioOptions from '../RadioOptions/RadioOptions'
import { handleSaveQuestionAnswer } from '../../actions/shared'

function UnansweredQuestionForm({ question, user, dispatch }) {

  const handleSubmitButtonClick = () => {
    dispatch(handleSaveQuestionAnswer(question.id, selectedOptionId))
  }

  const [selectedOptionId, setSelectedOptionId] = useState('optionOne')

  return (
    <div>
      Would you rather...

      <div>
        <img src={user.avatarURL} alt={`${user.name} profile`} />
        <p>{user.name}</p>
      </div>

      <RadioOptions
        options={[
          { text: question.optionOne.text, id: 'optionOne' },
          { text: question.optionTwo.text, id: 'optionTwo' }
        ]}
        checkedOptionId={selectedOptionId}
        checkedOptionIdChanged={setSelectedOptionId} />

      <Button buttonWasClicked={handleSubmitButtonClick}>Submit</Button>
    </div>
  )
}

function mapStateToProps(state, props) {
  const { question } = props

  const user = state.users[question.author]

  return {
    question,
    user,
  }
}

export default connect(mapStateToProps)(UnansweredQuestionForm)
