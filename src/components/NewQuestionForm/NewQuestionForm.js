import React, { useState } from 'react'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { handleCreateQuestion } from '../../actions/shared'
import { withRouter } from 'react-router-dom'
import './NewQuestionForm.scss'

const FIELD_OPTION_ONE = 'optionOneText'
const FIELD_OPTION_TWO = 'optionTwoText'
const ERROR_MISSING_OPTION = 'ERROR_MISSING_OPTION'
const ERROR_REPEATED_OPTION = 'ERROR_REPEATED_OPTION'

function NewQuestionForm({ dispatch, history }) {

  const [isLoading, setIsLoading] = useState(false)

  const [shownError, setShownError] = useState(null)
  const errorTexts = {
    [ERROR_MISSING_OPTION]: 'Both options are required. Please fill them and try again.',
    [ERROR_REPEATED_OPTION]: 'Options cannot have the same text. Please change one of them.',
  }

  const [formValue, setFormValue] = useState({
    [FIELD_OPTION_ONE]: '',
    [FIELD_OPTION_TWO]: ''
  })

  const handleInputChange = (e) => setFormValue({
    ...formValue,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleButtonWasClicked = () => {
    const optionOne = formValue[FIELD_OPTION_ONE]
    const optionTwo = formValue[FIELD_OPTION_TWO]

    if (!(optionOne && optionTwo)) {
      setShownError(ERROR_MISSING_OPTION)
      setIsLoading(false)
    } else if (optionOne === optionTwo) {
      setShownError(ERROR_REPEATED_OPTION)
      setIsLoading(false)
    } else {
      setShownError(null)
      setIsLoading(true)
      dispatch(handleCreateQuestion(optionOne, optionTwo, () => history.push('/')))
    }
  }

  return (
    <div className='newQuestionFormPage'>
      <h1>Add a new question</h1>

      <p className='wouldYouRather'>Would you rather...</p>

      <div className='form'>
        <input
          className='text-input'
          placeholder='Enter option one'
          name={FIELD_OPTION_ONE}
          value={formValue[FIELD_OPTION_ONE]}
          onChange={handleInputChange} />

        <div className='dividers'>
          <div className='divider one'></div>
          OR
          <div className='divider two'></div>
        </div>

        <input
          className='text-input'
          placeholder='Enter option two'
          name={FIELD_OPTION_TWO}
          value={formValue[FIELD_OPTION_TWO]}
          onChange={handleInputChange} />

        {
          shownError && (
            <p className='missing-option-error'>
              {errorTexts[shownError]}
            </p>)
        }

      </div>

      <Button
        buttonWasClicked={handleButtonWasClicked}
        isLoading={isLoading}>Add</Button>
    </div>
  )
}

export default withRouter(connect()(NewQuestionForm))
