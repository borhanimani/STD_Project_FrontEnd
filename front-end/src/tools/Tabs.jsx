import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { deepOrange, grey, orange } from '@mui/material/colors';

export function MenuTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        variant='scrollable'
        allowScrollButtonsMobile
        sx={{ bgcolor: grey[200] }}
        // TabIndicatorProps={{sx:{backgroundColor: deepOrange[500]}}}
        centered
      >
        <Tab value="one" label="Pizza" />
        <Tab value="two" label="Buger" />
        <Tab value="three" label="Drinks" />
        <Tab value="four" label="Fries" />
      </Tabs>
    </Box>
  );
}