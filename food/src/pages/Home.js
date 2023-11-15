import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../assets/foodPics.jpg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div
                className="headerContainer">
                <h1>SIMS FOOD'S</h1>
                <p>All kinds of food for home and away!</p>
                <Link to="/menu">
                    <button>Make your choice</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;