import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RemoveIcon from '@mui/icons-material/Remove';
import { FillColorBtn } from './Button';

export function FoodCard({ clsName }) {

    const [value, setValue] = React.useState(0);

    return (
        <Card className={clsName + '-container'}>

            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/src/assets/pizza-halopino.jpg"
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginLeft: 10 }}>pizaa-Halopino</div>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginRight: 10 }}>$13.88</div>
                </div>
                <div style={{ fontFamily: 'sans-serif', marginTop: 8, fontSize: 15, padding: 7, wordWrap: 'break-word', color: "gray" }}>cheese,halopino,sause,onion</div>
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 120, marginLeft: 10, marginRight: 10 }}>
                    <IconButton onClick={() => (value > 0) ? setValue(value - 1) : setValue(value)}>
                        <RemoveIcon sx={{ width: 30 }} />
                    </IconButton>
                    <div contentEditable='false' style={{ fontSize: 25, margin: 2, fontFamily: 'sans-serif', padding: 3 }}>{value}</div>
                    <IconButton onClick={() => setValue(value + 1)}>
                        <AddIcon sx={{ width: 30 }} />
                    </IconButton>
                </div>
                <FillColorBtn textValue={'Add to Cart'} clsName={'add-to-cart-btn'} />
            </CardActions>
        </Card>
    );
}
