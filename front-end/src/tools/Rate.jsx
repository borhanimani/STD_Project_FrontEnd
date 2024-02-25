import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export function RatingControl({ value, calledFunction }) {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rate Us</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        size='large'
        onChange={(event) => {
          // setValue(event.target.value);
          calledFunction(event.target.value)
        }}
      />
    </Box>
  );
}


export function RatingReadOnly({ rateValue }) {

  const [value, setValue] = React.useState(Number.parseInt(rateValue));

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating name="no-value" value={value} readOnly />
    </Box>
  );
}