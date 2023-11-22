import React from "react";
import { HamburgerList } from "../helpers/HamburgerList";
import HamburgerItem from '../components/HamburgerItem';
import '../styles/Hamburger.css';

function Hamburger() {
    return (
        <div className="hamburger">
            <h1 className="hamburgerTitle">Салати</h1>
            <div className="hamburgerList">
                {HamburgerList.map((hamburgerItem, key) => {
                    return <HamburgerItem
                        key={key}
                        image={hamburgerItem.image}
                        name={hamburgerItem.name}
                        price={hamburgerItem.price}
                    />
                })}
            </div>
        </div>
    )
}

export default Hamburger;