import React from 'react'
import { useParams } from 'react-router-dom'

function QuestionPage() {
  let { questionId } = useParams();

  return (
    <div className='questionPage'>
      questionId: {questionId}
    </div>
  )
}

export default QuestionPage