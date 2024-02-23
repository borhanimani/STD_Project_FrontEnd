import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export function BasicSwitches({changed}) {
    return (
        <Switch {...label} color='warning' sx={{display:'flex',flexDirection:'row',justifyContent:'center'}} onChange={changed}/>
    );
  }