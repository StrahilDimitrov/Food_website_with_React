import React from "react";

function PizzaItem({ image, name, price }) {
    return (
        <div className="pizzaItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{price} лв.</p>
        </div>
    )
}

export default PizzaItem;