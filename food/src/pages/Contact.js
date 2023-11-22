import React from "react";
import BannerImage from '../assets/foodPics.jpg';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide"
                style={{ backgroundImage: `url(${BannerImage})` }}>
            </div>
            <div className="rightSide">
                <h1>Контакти</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Име и фамилия:</label>
                    <input name="name" placeholder="Въведете име и фамилия" type="text" />
                    <label htmlFor="email">Имейл:</label>
                    <input name="email" placeholder="Въведете вашият имейл" type="email" />
                    <label htmlFor="message">Поръчка:</label>
                    <textarea rows="6" name="message" placeholder="Въведете поръчка..." required></textarea>
                    <button type="submit">Направи поръчка</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;