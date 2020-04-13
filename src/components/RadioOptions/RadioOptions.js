import React from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

function RadioOptions({ options, checkedOptionId, checkedOptionIdChanged }) {
  return (
    <RadioGroup value={checkedOptionId} onChange={(e) => checkedOptionIdChanged(e.target.value)}>
      {
        options.map(({ text, id }) => (
          <FormControlLabel key={id} value={id} control={<Radio />} label={text} />
        ))
      }
    </RadioGroup>
  )
}

export default RadioOptions
