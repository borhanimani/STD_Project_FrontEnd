import "./Menu.css"
import { useEffect } from "react"
import { MyToolbar } from "/src/tools/Toolbar"
import { MenuTabs } from "/src/tools/Tabs"
import { FoodCard } from "/src/tools/Card"
import { useState } from "react"
import { getCategories, getTabItemsMenu } from "/src/utils/Connection"
import { CircularColor } from "/src/tools/Progress"

export default function MenuPage() {

    // const menu = [{ id: 1, title: "Hallopino", category: 'Pizza', detail: "cheese,halopino,sause,onion", price: 13.88 }, { id: 2, title: "burger", category: 'Burger', detail: "cheese,onion", price: 18.99 }, { id: 1, title: "Hallopino", category: 'Pizza', detail: "cheese,halopino,sause,onion", price: 13.88 }, { id: 1, title: "Hallopino", category: 'Pizza', detail: "cheese,halopino,sause,onion", price: 13.88 }]
    const [menu, setMenu] = useState([])
    const [tabValue, setTabValue] = useState()
    const [orderList, setOrderList] = useState("")
    const [countList, setCountList] = useState([])
    const [progressStatus, setProgressStatus] = useState('hidden')

    getTabItems();

    // useEffect(() => {
    //     getTabItems();
    // }, [])

    console.log('val', tabValue);

    async function getTabItems() {
        const tabItems = await getCategories('/edit/category')
        sessionStorage.setItem('tabs', JSON.stringify(tabItems))
        console.log(tabItems);
    }

    function makeOrder(number, info) {
        if (number > 0) {
            console.log('ord', info);
            console.log('number', number);
            const newOrder = info;
            const orderCount = number;
            let newList = [...orderList, newOrder];
            let newNumberList = [...countList, orderCount]
            sessionStorage.setItem('orderList', JSON.stringify(newList))
            sessionStorage.setItem('valueOfBag', JSON.stringify(newList.length))
            sessionStorage.setItem('countList', JSON.stringify(newNumberList))
            setOrderList(newList);
            setCountList(newNumberList)
        } else {
            alert('Please set number of your selection first')
        }
    }

    async function getFilteredItem(id) {
        setProgressStatus('visible')
        setTabValue(id)
        console.log('st');
        const list = await getTabItemsMenu('/menu', id)
        setMenu(list)
        console.log('res', list);
        setProgressStatus('hidden')
    }

    return <div className="menu-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className="menu-bar"><CircularColor showValue={progressStatus} /> <MenuTabs calledFunction={getFilteredItem} value={tabValue} /></div>
        <div className="item-box">
            {menu.map((item) => {
                console.log('iteeem', item);
                return <FoodCard clsName={'food'} information={item} calledFunction={makeOrder} />
            })}
        </div>
    </div>
}
