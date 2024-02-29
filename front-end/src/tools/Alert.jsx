import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function SuccessAlert({ textValue }) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success" >{textValue}</Alert>
        </Stack>
    );
}

export function ErrorAlert({ textValue }) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">{textValue}</Alert>
        </Stack>
    );
}