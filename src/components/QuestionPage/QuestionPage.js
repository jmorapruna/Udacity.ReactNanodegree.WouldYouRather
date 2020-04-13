import React from 'react'
import { useParams } from 'react-router-dom'
import UnansweredQuestionForm from '../UnansweredQuestionForm/UnansweredQuestionForm'

function QuestionPage() {
  let { questionId } = useParams();

  return (
    <div className='questionPage'>
      <UnansweredQuestionForm questionId={questionId} />
    </div>
  )
}

export default QuestionPage
