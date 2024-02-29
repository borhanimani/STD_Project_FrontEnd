import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import Stack from '@mui/material/Stack';

export function CircularColor({ showValue }) {
    return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" visibility={showValue}>
            <CircularProgress color="warning" />
        </Stack>
    );
}