import React from "react";
import FastFood from '../assets/fastFood.jpg';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${FastFood})` }}>
                <div className="aboutBottom">
                    <h1>За нас</h1>
                    <p>Заповядайте в нашият ресторант, където може да хапнете каквото поискате на ниски цени.<br />
                        Предлагаме всякакъв избор на пици, сушита, бургери, десерти и напитки, които да
                        задоволят<br /> вашите вкусови рецептори. Предлагаме доставка и до дома. Каквото остане от
                        вашаият обяд или вечеря,<br />ще бъде опаковано за вкъщи.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;