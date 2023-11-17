import React, { useState } from "react";
import Logo from '../assets/foodLogo.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/">Начало</Link>
                    <Link to="/menu">Меню</Link>
                    <Link to="/about">За нас</Link>
                    <Link to="/contact">Контакти</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Начало</Link>
                <Link to="/menu">Меню</Link>
                <Link to="/about">За нас</Link>
                <Link to="/contact">Контакти</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar;