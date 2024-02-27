import "./Menu.css"
import { MyToolbar } from "/src/tools/Toolbar"
import { MenuTabs } from "/src/tools/Tabs"
import { FoodCard } from "/src/tools/Card"
import { useState } from "react"

export default function MenuPage() {

    const menu = [{ id: 1, title: "Hallopino", category: 'Pizza', detail: "cheese,halopino,sause,onion", price: 13.88 }, { id: 2, title: "burger", category: 'Burger', detail: "cheese,onion", price: 18.99 }, { id: 1, title: "Hallopino", category: 'Pizza', detail: "cheese,halopino,sause,onion", price: 13.88 }, { id: 1, title: "Hallopino", category: 'Pizza', detail: "cheese,halopino,sause,onion", price: 13.88 }]
    const [tabValue, setTabValue] = useState('Pizza')
    const [orderList, setOrderList] = useState("")

    function makeOrder(number, info) {
        if (number > 0) {
            console.log('number', number);
            const newOrder = { id: 1, foodId: info.id, numberOfFood: number };
            let newList = [...orderList, newOrder];
            sessionStorage.setItem('orderList', JSON.stringify(newList))
            sessionStorage.setItem('valueOfBag', JSON.stringify(newList.length))
            setOrderList(newList);
        } else {
            alert('Please set number of your selection first')
        }
    }


    console.log(
        localStorage.getItem('orderList'));
    console.log('bag', localStorage.getItem('valueOfBag'));

    return <div className="menu-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className="menu-bar"> <MenuTabs calledFunction={setTabValue} value={tabValue} /></div>
        <div className="item-box">

            {menu.filter((item) => item.category === tabValue).map((item) => {
                return <FoodCard clsName={'food'} information={item} calledFunction={makeOrder} />
            })}
        </div>
    </div>
}
