import React from "react";
import { SaladList } from "../helpers/SaladList";
import SaladItem from '../components/SaladItem';
import '../styles/Salad.css';

function Menu() {
    return (
        <div className="salad">
            <h1 className="saladTitle">Салати</h1>
            <div className="saladList">
                {SaladList.map((saladItem, key) => {
                    return <SaladItem
                        key={key}
                        image={saladItem.image}
                        name={saladItem.name}
                        price={saladItem.price}
                    />
                })}
            </div>
        </div>
    )
}

export default Menu;