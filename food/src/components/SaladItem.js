import React from "react";

function SaladItem({ image, name, price }) {
    return (
        <div className="saladItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{price} лв.</p>
        </div>
    )
}

export default SaladItem;