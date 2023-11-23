import React from "react";

function DessertItem({ image, name, price }) {
    return (
        <div className="dessertItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{price} лв.</p>
        </div>
    )
}

export default DessertItem;