import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import RadioOptions from '../RadioOptions/RadioOptions'
import { handleSaveQuestionAnswer } from '../../actions/shared'
import { Redirect } from 'react-router-dom'

function UnansweredQuestionForm({ questionId, optionOneText, optionTwoText, userName, avatarURL, dispatch }) {

  const handleSubmitButtonClick = () => {
    dispatch(handleSaveQuestionAnswer(questionId, selectedOptionId, () => setRedirectToHome(true)))
  }

  const [selectedOptionId, setSelectedOptionId] = useState('optionOne')
  const [redirectToHome, setRedirectToHome] = useState(false)

  if (redirectToHome)
    return <Redirect to='/' />

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

      <Button buttonWasClicked={handleSubmitButtonClick}>Submit</Button>
    </div>
  )
}

function mapStateToProps(state, props) {
  const { questionId } = props

  const question = state.questions[questionId]
  const optionOneText = question.optionOne.text
  const optionTwoText = question.optionTwo.text

  const { name: userName, avatarURL } = state.users[question.author]

  return {
    questionId,
    optionOneText, optionTwoText,
    userName, avatarURL
  }
}

export default connect(mapStateToProps)(UnansweredQuestionForm)
