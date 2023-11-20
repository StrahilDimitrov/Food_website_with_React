import React from "react";
import { SushiList } from "../helpers/SushiList";
import SushiItem from '../components/SushiItem';
import '../styles/Sushi.css';

function Sushi() {
    return (
        <div className="sushi">
            <h1 className="sushiTitle">Салати</h1>
            <div className="sushiList">
                {SushiList.map((sushiItem, key) => {
                    return <SushiItem
                        key={key}
                        image={sushiItem.image}
                        name={sushiItem.name}
                        price={sushiItem.price}
                    />
                })}
            </div>
        </div>
    )
}

export default Sushi;