import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuestionSummary from '../QuestionSummary/QuestionSummary'
import './HomePage.scss'

function HomePage({ unansweredQuestions, answeredQuestions }) {
  const [showAnsweredQuestionsTab, setShowAnsweredQuestionsTab] = useState(false)

  return (<div className='homePage'>
    <header>
      <div className={`tabButton ${!showAnsweredQuestionsTab ? 'active' : ''}`} onClick={() => setShowAnsweredQuestionsTab(false)}>Unanswered questions</div>
      <div className={`tabButton ${showAnsweredQuestionsTab ? 'active' : ''}`} onClick={() => setShowAnsweredQuestionsTab(true)}>Answered questions</div>
    </header>

    {
      showAnsweredQuestionsTab && (<div>
        {
          answeredQuestions.map(
            q => <QuestionSummary key={q.id} questionId={q.id} />
          )
        }
      </div>)
    }

    {
      !showAnsweredQuestionsTab && (<div>
        {
          unansweredQuestions.map(
            q => <QuestionSummary key={q.id} questionId={q.id} />
          )
        }
      </div>)
    }
  </div>)
}

function mapStateToProps(state) {
  const questions = Object.values(state.questions)
    .sort((questionA, questionB) => questionB.timestamp - questionA.timestamp)

  const answeredQuestionIds = new Set(Object.keys(state.users[state.authedUserId].answers))

  const unansweredQuestions = questions.filter(q => !answeredQuestionIds.has(q.id))
  const answeredQuestions = questions.filter(q => answeredQuestionIds.has(q.id))

  return {
    unansweredQuestions,
    answeredQuestions
  }
}

export default connect(mapStateToProps)(HomePage)
