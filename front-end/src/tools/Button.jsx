import Button from '@mui/material/Button';
import { deepOrange } from '@mui/material/colors';

export function FillColorBtn({ textValue,clsName }) {
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

// export function OrderBtn() {
//     return <Button
//         variant='contained'
//         sx={
//             {
//                 fontSize: 20,
//                 fontFamily: 'sans-serif',
//                 // fontWeight: 'bold',
//                 bgcolor: deepOrange[500],
//                 "&:hover": { bgcolor: deepOrange[700] },
//                 width: 300,
//                 height: 50,
//                 textTransform: 'none'
//             }
//         }
//     >Order Now</Button>
// }

// export function Btn({ value }) {
//     return <Button className='fff'
//         variant='outlined'
//         sx={
//             {
//                 borderColor: deepOrange[500],
//                 color: deepOrange[500],
//                 "&:hover": { bgcolor: deepOrange[50], borderColor: deepOrange[500] }
//             }
//         }
//     >{value}</Button>
// }