import React from 'react'
import './PercentageBar.scss'

function PercentageBar({ ratio }) {
  const percentage = ratio * 100;
  const fractionalPart = percentage - Math.floor(percentage)

  let shownPercentage;
  if (percentage === 0)
    shownPercentage = 0
  else if (percentage === 100)
    shownPercentage = 100
  else if (fractionalPart === 0)
    shownPercentage = percentage.toPrecision(2)
  else
    shownPercentage = percentage.toPrecision(4)

  const has100Class = shownPercentage === 100

  return (
    <div className='percentageBar'>
      <div className={`activeBar ${has100Class ? 'activeBar100' : ''}`} style={{ width: `${percentage}%` }} />
      <div className='numberWrap'>
        <div className='number'>{shownPercentage} %</div>
      </div>
    </div>
  )
}

export default PercentageBar
