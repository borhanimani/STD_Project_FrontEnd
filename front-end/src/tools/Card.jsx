import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RemoveIcon from '@mui/icons-material/Remove';
import { FillColorBtn, DeleteBtn } from './Button';
import { deepOrange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { RatingReadOnly } from './Rate';

export function FoodCard({ clsName, information, calledFunction }) {

    const [resultNumber, setNumber] = React.useState(0);

    function manageNumber(isAdd) {
        (isAdd) ? setNumber(resultNumber + 1) : setNumber(resultNumber - 1)
    }

    function sendInfo() {
        calledFunction(resultNumber, information)
    }

    return (
        <Card className={clsName + '-container'}>

            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={information.photolink}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginLeft: 10 }}>{information.name}</div>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginRight: 10 }}>${Number.parseFloat(information.price)}</div>
                </div>
                <div style={{ fontFamily: 'sans-serif', marginTop: 8, fontSize: 15, padding: 7, wordWrap: 'break-word', color: "gray" }}>{information.detail}</div>
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 120, marginLeft: 10, marginRight: 10 }}>
                    <Counter calledFunction={manageNumber} value={resultNumber} />
                </div>
                <FillColorBtn textValue={'Add to Cart'} clsName={'add-to-cart-btn'} calledFunction={sendInfo} />
            </CardActions>
        </Card>
    );
}

export function CartCard({ clsName, calledFunctionBuy, info }) {

    let value = 0
    info.map((item) => {
        value += (Number.parseInt(item.count) * Number.parseFloat(item.price));
    })
    console.log('vallll', value);

    function buy() {
        calledFunctionBuy(value)
    }

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
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginRight: 40 }}>{`$${value}`}</div>
                </div>
                <div style={{ fontFamily: 'sans-serif', marginTop: 8, fontSize: 15, padding: 7, wordWrap: 'break-word', color: "gray" }}>Delivery Free</div>
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ marginRight: 30 }}>
                    <FillColorBtn textValue={'Buy'} clsName={'add-to-cart-btn'} calledFunction={buy} />
                </div>
            </CardActions>
        </Card>
    );
}

export function OrderCard({ clsName, information, calledFunctionDelete }) {

    function deleteInfo() {
        calledFunctionDelete(information)
    }

    return (
        <Card className={clsName + '-container'}>

            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={information.photolink}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', borderRight: 'solid', marginRight: 0 }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginLeft: 10 }}>{information.name}</div>
                    <div style={{ fontSize: 30, margin: 5, fontWeight: 'bold', color: 'rgb(56, 56, 56)', marginRight: 50 }}>{`$${information.price}`}</div>
                </div>
                <div style={{ fontFamily: 'sans-serif', marginTop: 8, fontSize: 15, padding: 7, wordWrap: 'break-word', color: "gray" }}>{information.detail}</div>
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', marginLeft: 10, marginRight: 30 }}>
                    <Counter2 value={information.count} />
                    <DeleteBtn calledFunction={deleteInfo} />
                </div>

            </CardActions>
        </Card>
    );
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export function CommentCard({ clsName, info }) {

    return (
        <Card className={clsName} sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {info.name.slice(0, 1)}
                    </Avatar>
                }
                title={info.name}
                // subheader="September 14, 2016"
                sx={{ borderBottom: 'solid 1px gray', margin: 1 }}
            />
            <CardContent
                sx={{ padding: 0, borderBottom: 'solid 1px gray', margin: 3 }}>
                {/* <MultiTextAria text={info.detail} /> */}
                <Typography variant="body2" color="text.secondary"
                    sx={{ wordBreak: 'break-word', marginBottom: 5 }} >
                    {info.detail}
                </Typography>
            </CardContent >
            <CardActions sx={{ marginLeft: 3, padding: 0 }}>
                <RatingReadOnly rateValue={info.rate} />
            </CardActions>
        </Card>
    );
}

export function Counter({ calledFunction, value }) {
    // const [value, setValue] = React.useState(0);
    // calledFunction(value)

    return <>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton sx={{ width: 40 }} onClick={() => (value > 0) ? calledFunction(false) : value}>
                <RemoveIcon sx={{ width: 30, color: deepOrange[500] }} />
            </IconButton>
            <div contentEditable='false' style={{ fontSize: 25, margin: 2, fontFamily: 'sans-serif', padding: 3, marginRight: 5, marginLeft: 5 }}>{value}</div>
            <IconButton sx={{ bgcolor: deepOrange[500], width: 40, "&:hover": { bgcolor: deepOrange[700] } }} onClick={() => calledFunction(true)}>
                <AddIcon sx={{ width: 30, color: 'white' }} />
            </IconButton>
        </div>
    </>
}

export function Counter2({ calledFunction, value }) {
    // const [value, setValue] = React.useState(0);
    // calledFunction(value)

    return <>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div contentEditable='false' style={{ fontSize: 40, margin: 2, fontFamily: 'sans-serif', padding: 3, marginRight: 5, marginLeft: 5 }} aria-disabled={true} >{value}</div>
        </div>
    </>
}
