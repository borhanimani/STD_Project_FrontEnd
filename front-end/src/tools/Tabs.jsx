import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { deepOrange, grey, orange } from '@mui/material/colors';

export function MenuTabs({ calledFunction, value }) {

  const handleChange = (event, newValue) => {
    calledFunction(newValue);
  };

  const tilteList = ['Pizza', 'Burger', 'Drinks', 'Fries']

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
        {
          tilteList.map((title) => {
            return <Tab value={title} label={title} />
          })
        }
        {/* <Tab value="Pizza" label="Pizza" />
        <Tab value="Burger" label="Buger" />
        <Tab value="Drinks" label="Drinks" />
        <Tab value="Fries" label="Fries" /> */}
      </Tabs>
    </Box>
  );
}