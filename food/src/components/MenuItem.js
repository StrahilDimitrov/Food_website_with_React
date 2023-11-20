import React from "react";

function MenuItem({ image, name, link }) {
    return (
        <div className="menuItem">
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <div className="btn">{link}</div>
        </div>
    )
}

export default MenuItem;