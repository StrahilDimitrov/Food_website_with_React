import React from "react";

function SushiItem({ image, name, price }) {
    return (
        <div className="sushiItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{price} лв.</p>
        </div>
    )
}

export default SushiItem;