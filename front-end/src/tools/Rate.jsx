import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export function RatingControl() {
  const [value, setValue] = React.useState(2);

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
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}


export function RatingReadOnly() {
    const [value2, setValue2] = React.useState(2);
  
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value2={null} />
      </Box>
    );
  }