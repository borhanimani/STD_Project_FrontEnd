import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function MyTextAria() {
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
            />
        </Box>
    );
}