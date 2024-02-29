import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function MyTextAria({ value, calledFunction }) {
    return (
        <Box
            component="form"
            sx={{
                width: '90%',
                '& .MuiTextField-root': { m: 1, width: '100%' }
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-multiline-flexible"
                label="Comment Here"
                multiline
                maxRows={3}
                variant="standard"
                color='warning'
                onChange={calledFunction}
                value={value}
            />
        </Box>
    );
}

export function BorderTextAria() {
    return (
        <Box
            component="form"
            sx={{
                width: '90%',
                '& .MuiTextField-root': { m: 1, width: '100%' }
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={3}
                defaultValue=""
            />
        </Box>
    );
}

export function SimpleTextField({ label, calledFunction, value }) {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-required"
                label={label}
                value={value}
                onChange={(e)=>calledFunction(e.target.value)}
            />
        </Box>
    );
}

export function PasswordTextField({ calledFunction, value }) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={value}
                onChange={(e)=>calledFunction(e.target.value)}
            />
        </Box>
    );
}

export function NumberTextField({calledFunction, value}) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                type='number'
                id="outlined-required"
                label="Phone Number"
                value={value}
                onChange={(e)=>calledFunction(e.target.value)}
            />
        </Box>
    );
}