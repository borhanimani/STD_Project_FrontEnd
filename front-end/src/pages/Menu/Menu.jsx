import "./Menu.css"
import { MyToolbar } from "/src/tools/Toolbar"
import { MenuTabs } from "/src/tools/Tabs"
import { FoodCard } from "/src/tools/Card"

export default function MenuPage() {

    return <div className="menu-container">
        <div className="toolbar"><MyToolbar /></div>
        <div className="menu-bar"> <MenuTabs /></div>
        <div className="item-box"> <FoodCard clsName={'food'} /> </div>
    </div>
}
