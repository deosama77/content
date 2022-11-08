import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoCompleteComboBo() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 215 }}
      autoHighlight
      renderInput={(params) => <TextField {...params} variant="standard" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'PLACEMENT 1', year: 1994 },
  { label: 'PLACEMENT 2', year: 1972 },
  { label: 'PLACEMENT 3',  year: 1974 },
  { label: 'PLACEMENT 4', year: 2008 },
  { label: 'PLACEMENT 5', year: 1957 },
  { label: 'PLACEMENT 6', year: 1993 },
  { label: 'PLACEMENT 7', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  
];