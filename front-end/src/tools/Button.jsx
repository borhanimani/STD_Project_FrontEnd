import Button from '@mui/material/Button';
import { deepOrange } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function FillColorBtn({ textValue, clsName }) {
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
    >{textValue}</Button>
}

export function OutLineBtn({ textValue }) {
    return <Button className='outline-btn'
        variant='outlined'
        sx={
            {
                borderColor: deepOrange[500],
                color: deepOrange[500],
                "&:hover": { bgcolor: deepOrange[50], borderColor: deepOrange[500] }
            }
        }
    >{textValue}</Button>
}

export function DeleteBtn() {
    return <div>
        <IconButton aria-label="delete">
            <DeleteIcon sx={{color:'red'}} />
        </IconButton>
    </div>
}