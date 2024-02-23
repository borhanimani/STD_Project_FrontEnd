import './Order.css'
import { MyToolbar } from "/src/tools/Toolbar.jsx"
import { CartCard,OrderCard } from '/src/tools/Card'

export default function OrderPage() {
    return <div className="order-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className="order-body-page">
            <div className='order-view' >
                <OrderCard clsName={'order-box'}/>
                <OrderCard clsName={'order-box'}/>
                <OrderCard clsName={'order-box'}/>
                <OrderCard clsName={'order-box'}/>
            </div>
            <div className='cart-view'>
                <div className='cart-box'><CartCard clsName={'cart'} /></div>
            </div>
        </div>
    </div>
}
