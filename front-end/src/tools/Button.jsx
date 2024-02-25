import Button from '@mui/material/Button';
import { deepOrange } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export function FillColorBtn({ textValue, clsName, calledFunction }) {
    return <Button className={clsName}
        variant='contained'
        sx={
            {
                fontSize: 18,
                textTransform: 'none',
                bgcolor: deepOrange[500],
                "&:hover": { bgcolor: deepOrange[700] }
            }
        }
        onClick={calledFunction}
    >{textValue}</Button>
}

export function OutLineBtn({ textValue, clsName, calledFunction }) {

    return <Button className={clsName}
        variant='outlined'
        sx={
            {
                borderColor: deepOrange[500],
                color: deepOrange[500],
                "&:hover": { bgcolor: deepOrange[50], borderColor: deepOrange[500] }
            }
        }
        onClick={calledFunction()}
    > {textValue}</Button >
}

export function DeleteBtn({ calledFunction }) {
    return <div>
        <IconButton aria-label="delete" onClick={calledFunction}>
            <DeleteIcon sx={{ color: 'red' }} />
        </IconButton>
    </div>

}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export function UploadBtn({ clsName }) {
    return (
        <Button
            className={clsName}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
        >
            Upload file
            <VisuallyHiddenInput type="file" />
        </Button>
    );
}