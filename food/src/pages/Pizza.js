import React from "react";
import { PizzaList } from "../helpers/PizzaList";
import PizzaItem from '../components/PizzaItem';
import '../styles/Pizza.css';

function Pizza() {
    return (
        <div className="pizza">
            <h1 className="pizzaTitle">Салати</h1>
            <div className="pizzaList">
                {PizzaList.map((pizzaItem, key) => {
                    return <PizzaItem
                        key={key}
                        image={pizzaItem.image}
                        name={pizzaItem.name}
                        price={pizzaItem.price}
                    />
                })}
            </div>
        </div>
    )
}

export default Pizza;