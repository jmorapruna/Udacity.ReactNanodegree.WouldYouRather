import React from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import './RadioOptions.scss'
import { withStyles } from '@material-ui/core/styles';

const StyledRadio = withStyles({
  root: {
    color: '#272730',
    '&$checked': {
      color: '#5362e6',
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />)

function RadioOptions({ options, checkedOptionId, checkedOptionIdChanged }) {
  return (
    <RadioGroup
      value={checkedOptionId}
      onChange={(e) => checkedOptionIdChanged(e.target.value)}
      className='radioOptions'>
      {
        options.map(({ text, id }) => (
          <FormControlLabel
            className='option'
            key={id}
            value={id}
            control={<StyledRadio />}
            label={text} />
        ))
      }
    </RadioGroup>
  )
}

export default RadioOptions
