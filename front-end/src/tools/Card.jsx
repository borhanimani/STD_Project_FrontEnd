import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RemoveIcon from '@mui/icons-material/Remove';
import { FillColorBtn, DeleteBtn } from './Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import { deepOrange } from '@mui/material/colors';


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
                    <Counter />
                </div>
                <FillColorBtn textValue={'Add to Cart'} clsName={'add-to-cart-btn'} />
            </CardActions>
        </Card>
    );
}

export function CartCard({ clsName }) {

    return (
        <Card className={clsName + '-container'}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="400"
                image="/src/assets/tomato-2780424_1920.jpg"
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginLeft: 10 }}>Total</div>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginRight: 40 }}>$13.88</div>
                </div>
                <div style={{ fontFamily: 'sans-serif', marginTop: 8, fontSize: 15, padding: 7, wordWrap: 'break-word', color: "gray" }}>Delivery Free</div>
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ marginRight: 30 }}>
                    <FillColorBtn textValue={'Buy'} clsName={'add-to-cart-btn'} />
                </div>
            </CardActions>
        </Card>
    );
}

export function Counter() {
    const [value, setValue] = React.useState(0);
    return <>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton sx={{ width: 40 }} onClick={() => (value > 0) ? setValue(value - 1) : setValue(value)}>
                <RemoveIcon sx={{ width: 30, color: deepOrange[500] }} />
            </IconButton>
            <div contentEditable='false' style={{ fontSize: 25, margin: 2, fontFamily: 'sans-serif', padding: 3, marginRight: 5, marginLeft: 5 }}>{value}</div>
            <IconButton sx={{ bgcolor: deepOrange[500], width: 40, "&:hover": { bgcolor: deepOrange[700] } }} onClick={() => setValue(value + 1)}>
                <AddIcon sx={{ width: 30, color: 'white' }} />
            </IconButton>
        </div>
    </>
}

export function OrderCard({ clsName }) {

    const [value, setValue] = React.useState(0);

    return (
        <Card className={clsName + '-container'}>

            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="/src/assets/pizza-halopino.jpg"
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', borderRight: 'solid', marginRight: 0 }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginLeft: 10 }}>pizaa-Halopino</div>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginRight: 50 }}>$13.88</div>
                </div>
                <div style={{ fontFamily: 'sans-serif', marginTop: 8, fontSize: 15, padding: 7, wordWrap: 'break-word', color: "gray" }}>cheese,halopino,sause,onion</div>
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 2 }}>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', marginLeft: 10, marginRight: 30}}>
                    <Counter />
                    <DeleteBtn />
                </div>

            </CardActions>
        </Card>
    );
}
