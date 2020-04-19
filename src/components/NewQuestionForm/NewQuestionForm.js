import React, { useState } from 'react'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { handleCreateQuestion } from '../../actions/questions'
import { Redirect } from 'react-router-dom'

const FIELD_OPTION_ONE = 'optionOneText'
const FIELD_OPTION_TWO = 'optionTwoText'

function NewQuestionForm({ dispatch }) {

  const [hasCompleted, setHasCompleted] = useState(false)

  const [formValue, setFormValue] = useState({
    [FIELD_OPTION_ONE]: '',
    [FIELD_OPTION_TWO]: ''
  })

  const handleInputChange = (e) => setFormValue({
    ...formValue,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleButtonWasClicked = () => {
    dispatch(handleCreateQuestion(
      formValue[FIELD_OPTION_ONE],
      formValue[FIELD_OPTION_TWO],
      () => setHasCompleted(true)
    ))
  }

  return (
    <div>
      {hasCompleted && <Redirect to='/' />}

      <h3>Create new question</h3>

      <p>Would you rather...</p>
      <input
        placeholder='Enter option one'
        name={FIELD_OPTION_ONE}
        value={formValue[FIELD_OPTION_ONE]}
        onChange={handleInputChange}></input>

      OR

      <input
        placeholder='Enter option two'
        name={FIELD_OPTION_TWO}
        value={formValue[FIELD_OPTION_TWO]}
        onChange={handleInputChange}></input>

      <Button
        buttonWasClicked={handleButtonWasClicked}
      >Submit</Button>
    </div>
  )
}

export default connect()(NewQuestionForm)
