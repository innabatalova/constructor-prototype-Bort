import React, { useState, useContext } from 'react'

import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import Context from '../../context'

const FieldUserDataThreeProp = ({ propLabelId, propLabel, propValueOne, propValueTwo, propValueThree }) => {

  const [age, setAge] = useState('');

  const [context, setContext] = useContext(Context);

  const setFilterValues = (event) => {
    setAge(event.target.value);
    if (propLabelId === 'quantity-id') {
      context.quantity = event.target.value
    }
    if (propLabelId === 'size-id') {
      context.sizeLevel = event.target.value
    }
    if (propLabelId === 'comfort-id') {
      context.comfort = event.target.value
    }

  };

  return (
    <Box sx={{
      minWidth: 330, marginBottom: 3, '@media (max-width: 420px)': {
        minWidth: '100%',
      }
    }}>
      <FormControl fullWidth>
        <InputLabel sx={{ fontFamily: 'Roboto' }} id={propLabelId}>{propLabel}</InputLabel>
        <Context.Provider value={[context, setContext]}>
          <Select
            labelId={propLabelId}
            className='field-select'
            value={age}
            onChange={setFilterValues}
            label={propLabel}
          >
            <MenuItem sx={{ fontFamily: 'Roboto' }} value={propValueOne}>{propValueOne}</MenuItem>
            <MenuItem sx={{ fontFamily: 'Roboto' }} value={propValueTwo}>{propValueTwo}</MenuItem>
            <MenuItem sx={{ fontFamily: 'Roboto' }} value={propValueThree}>{propValueThree}</MenuItem>
          </Select>
        </Context.Provider>
      </FormControl>
    </Box>
  )
}

export default FieldUserDataThreeProp