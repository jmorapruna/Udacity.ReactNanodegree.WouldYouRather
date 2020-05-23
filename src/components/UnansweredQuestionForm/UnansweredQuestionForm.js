import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import RadioOptions from '../RadioOptions/RadioOptions'
import { handleSaveQuestionAnswer } from '../../actions/shared'
import './UnansweredQuestionForm.scss'

function UnansweredQuestionForm({ question, user, dispatch }) {

  const handleAnswerButtonClick = () => {
    setIsLoading(true)
    dispatch(handleSaveQuestionAnswer(question.id, selectedOptionId))
  }

  const [selectedOptionId, setSelectedOptionId] = useState('optionOne')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='unansweredQuestionForm'>
      <div className='user'>
        <img src={user.avatarURL} alt={`${user.name} profile`} className='avatar' />
        <p className='asksText'>{user.name} asks:</p>
      </div>

      <p className='title'>Would you rather...</p>

      <div className='options'>
        <RadioOptions
          options={[
            { text: question.optionOne.text, id: 'optionOne' },
            { text: question.optionTwo.text, id: 'optionTwo' }
          ]}
          checkedOptionId={selectedOptionId}
          checkedOptionIdChanged={setSelectedOptionId} />
      </div>

      <Button
        buttonWasClicked={handleAnswerButtonClick}
        isLoading={isLoading}
        className='button'>Answer</Button>
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
