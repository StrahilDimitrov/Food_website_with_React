import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <PinterestIcon />
            </div>
            <p>&copy; 2023 www.simsfood.bg</p>
        </div>
    )
}

export default Footer;