import React, { useState, useContext } from 'react'

import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import Context from '../../context'

const FieldUserDataThreeProp = ({ propLabelId, propLabel, propValueOne, propValueTwo, propValueThree }) => {

  const [age, setAge] = useState('');

  const [context, setContext] = useContext(Context);

  const handleChange = (event) => {
    setAge(event.target.value);
    if (propLabelId === 'quantity-id') {
      context.quantity = event.target.value
    }
    if (propLabelId === 'soundproofing-id') {
      context.soundProofing = event.target.value
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
          <MenuItem value={propValueThree}>{propValueThree}</MenuItem>
        </Select>
      </Context.Provider>
    </FormControl>
  </Box>
)
}

export default FieldUserDataThreeProp