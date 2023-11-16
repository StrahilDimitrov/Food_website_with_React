import React from "react";

function MenuItem({ image, name, link }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <button>{link}</button>
        </div>
    )
}

export default MenuItem;