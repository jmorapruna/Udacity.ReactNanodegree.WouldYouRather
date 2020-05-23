import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuestionSummary from '../QuestionSummary/QuestionSummary'
import './HomePage.scss'

const QuestionsList = ({ questions, children }) => (
  <div>
    {
      questions.length === 0
        ? <div className='emptyContent'>{children}</div>
        : questions.map(
          q => <QuestionSummary key={q.id} questionId={q.id} />
        )
    }
  </div>
)

function HomePage({ unansweredQuestions, answeredQuestions }) {
  const [showAnsweredQuestionsTab, setShowAnsweredQuestionsTab] = useState(false)

  return (<div className='homePage'>
    <h1>What's people asking?</h1>

    <header>
      <div className={`tabButton ${!showAnsweredQuestionsTab ? 'active' : ''}`} onClick={() => setShowAnsweredQuestionsTab(false)}>Unanswered questions</div>
      <div className={`tabButton ${showAnsweredQuestionsTab ? 'active' : ''}`} onClick={() => setShowAnsweredQuestionsTab(true)}>Answered questions</div>
    </header>

    {
      showAnsweredQuestionsTab
        ? <QuestionsList questions={answeredQuestions}>You have not answered any question yet, take a look at the "unanswered questions" tab.</QuestionsList>
        : <QuestionsList questions={unansweredQuestions}>You're all set, there aren't any questions left to answer.</QuestionsList>
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
