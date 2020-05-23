import React, { useState } from 'react'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { handleCreateQuestion } from '../../actions/questions'
import { withRouter } from 'react-router-dom'
import './NewQuestionForm.scss'

const FIELD_OPTION_ONE = 'optionOneText'
const FIELD_OPTION_TWO = 'optionTwoText'

function NewQuestionForm({ dispatch, history }) {

  const [isLoading, setIsLoading] = useState(false)
  const [showMissingOptionError, setShowMissingOptionError] = useState(false)

  const [formValue, setFormValue] = useState({
    [FIELD_OPTION_ONE]: '',
    [FIELD_OPTION_TWO]: ''
  })

  const handleInputChange = (e) => setFormValue({
    ...formValue,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleButtonWasClicked = () => {
    if (!(formValue[FIELD_OPTION_ONE] && formValue[FIELD_OPTION_TWO])) {
      setShowMissingOptionError(true)
      setIsLoading(false)
    } else {
      setShowMissingOptionError(false)
      setIsLoading(true)
      dispatch(handleCreateQuestion(formValue[FIELD_OPTION_ONE], formValue[FIELD_OPTION_TWO], () => history.push('/')))
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
          showMissingOptionError && (
            <p className='missing-option-error'>
              Both options are required. Please fill them and try again.
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
