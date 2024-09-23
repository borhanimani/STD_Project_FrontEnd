import './Order.css'
import { useState, useEffect } from 'react'
import { MyToolbar } from "/src/tools/Toolbar.jsx"
import { CartCard, OrderCard } from '/src/tools/Card'
import { buyOrder } from '/src/utils/Connection'
import { useNavigate } from 'react-router-dom'
import { CircularColor } from '../../tools/Progress'

export default function OrderPage() {

    const [orderlist, setList] = useState([]);
    const navigation = useNavigate();
    const [progressStatus, setProgressStatus] = useState('hidden')


    useEffect(() => {
        prepareOrders();
    }, [])

    function prepareOrders() {
        if (sessionStorage.getItem('orderList') && sessionStorage.getItem('valueOfBag')) {
            const orders = JSON.parse(sessionStorage.getItem('orderList'));
            setList(orders);
        }

    }

    function deleteOrder(info) {
        const newList = orderlist.filter(function (item) {
            return item != info;
        })
        sessionStorage.setItem('orderList', JSON.stringify(newList))
        sessionStorage.setItem('valueOfBag', JSON.stringify(newList.length))
        setList(newList);
    }

    async function buy(price) {
        if (localStorage.getItem('user')) {
            const userId = JSON.parse(localStorage.getItem('user'));
            let page = '';
            orderlist.map((item) => {
                page += item.name + "-"
            })
            try {
                setProgressStatus('visible')
                const orderPage = { 'userId': Number.parseInt(userId[0].id), 'detail': page, 'totalPrice': price }
                await buyOrder('/order/buy', orderPage);
                sessionStorage.clear();
                setProgressStatus('hidden')
                navigation('/');
                alert('Thanks for your shop');
            } catch (error) {

            }
        } else {
            alert('Please finish with your acount')
        }

    }

    return <div className="order-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className="order-body-page">
            <CircularColor showValue={progressStatus} />
            <div className='order-view' >
                {
                    orderlist.map((item) => {
                        return <OrderCard clsName={'order-box'} information={item} calledFunctionDelete={deleteOrder} />
                    })
                }
            </div>
            <div className='cart-view'>
                <div className='cart-box'><CartCard clsName={'cart'} calledFunctionBuy={buy} info={orderlist} /></div>
            </div>
        </div>
    </div>
}
