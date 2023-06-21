import React, { useState, useContext } from 'react'

import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import Context from '../../context'

const FieldUserDataTwoProp = ({ propLabelId, propLabel, propValueOne, propValueTwo }) => {

  const [age, setAge] = useState('')

  const [context, setContext] = useContext(Context);

  const handleChange = (event) => {
    setAge(event.target.value);
    if (propLabelId === 'diameter-id'){
      context.diameter = event.target.value
    } 
    if (propLabelId === 'control-id') {
      context.control = event.target.value
    }
    if (propLabelId === 'soundproofing-id') {
      context.soundproofing = event.target.value
    }
    if (propLabelId === 'reverce-id') {
      context.reverce = event.target.value
    }
    if (propLabelId === 'booster-id') {
      context.booster = event.target.value
    }
  };

  return (
    <Box sx={{ minWidth: 120, marginBottom: 3, marginRight: 3 }}>
      <FormControl fullWidth>
        <InputLabel id={propLabelId}>{propLabel}</InputLabel>
        <Context.Provider value={[context, setContext]}>
          <Select
            labelId={propLabelId}
            className='field-select'
            value={age}
            onChange={handleChange}
            label={propLabel}
          >
            <MenuItem value={propValueOne}>{propValueOne}</MenuItem>
            <MenuItem value={propValueTwo}>{propValueTwo}</MenuItem>
          </Select>
        </Context.Provider>
      </FormControl>
    </Box>
  )
}

export default FieldUserDataTwoProp