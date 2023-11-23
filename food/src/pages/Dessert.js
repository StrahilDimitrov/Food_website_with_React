import React from "react";
import { DessertList } from "../helpers/DessertList";
import DessertItem from '../components/DessertItem';
import '../styles/Dessert.css';

function Dessert() {
    return (
        <div className="dessert">
            <h1 className="dessertTitle">Десерти</h1>
            <div className="dessertList">
                {DessertList.map((dessertItem, key) => {
                    return <DessertItem
                        key={key}
                        image={dessertItem.image}
                        name={dessertItem.name}
                        price={dessertItem.price}
                    />
                })}
            </div>
        </div>
    )
}

export default Dessert;