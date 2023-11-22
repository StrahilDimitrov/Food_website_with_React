import React from "react";

function HamburgerItem({ image, name, price }) {
    return (
        <div className="hamburgerItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{price} лв.</p>
        </div>
    )
}

export default HamburgerItem;