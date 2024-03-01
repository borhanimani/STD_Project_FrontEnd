import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectLabel({ customLabel, calledFunction }) {
    const saves = sessionStorage.getItem('catList');
    let catList = [{ 'id': -1, 'name': 'none' }];
    if (!(saves == null)) {
        catList = catList.concat(JSON.parse(saves));
    }
    const [value, setValue] = React.useState('')

    function setterValur(e) {
        setValue(e.target.value);
        calledFunction(e.target.value)
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">{customLabel}</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={value}
                label={customLabel}
                onChange={setterValur}
            >
                {
                    catList.map((item) => {
                        return <MenuItem value={item.id}>{item.name}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
}

export function SelectLabel2({ customLabel, calledFunction }) {
    const saves = sessionStorage.getItem('itemList');
    let catList = [{ 'id': -1, 'name': 'none' }];
    if (!(saves == null)) {
        catList = catList.concat(JSON.parse(saves));
    }
    const [value, setValue] = React.useState('');

    function setterValur(e) {
        setValue(e.target.value);
        calledFunction(e.target.value)
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">{customLabel}</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={value}
                label={customLabel}
                onChange={setterValur}
            >
                {
                    catList.map((item) => {
                        return <MenuItem value={item.id}>{item.name}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
}