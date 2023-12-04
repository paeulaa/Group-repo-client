import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import '../css/main.css';
import Favicon from 'react-favicon';
import favicon from '../img/favicon-f.svg';
import coverImage from '../img/cover-image.png';
import picture1 from '../img/demo1.png';
import picture2 from '../img/demo2.png';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';
import youtube from '../img/youtube.svg';
// import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';

export default function Main() {
    return(
        <div className="body">
            <div className="navbar">
                <div className="brand">
                    <img src={favicon} alt="icon" />
                    <div className="name">Good Fortune</div>
                </div>
                <div className="buttons">
                    <b>Welcome! Traveler!</b>
                    <a><div className="login-button">
                        <Link className="nav-link" to ="/signout">Log out</Link>
                    </div>
                    </a>
                    {/* <Link className="nav-link" to ="/signout"><div className="register-button" id="register">Try now!</div></Link> */}
                </div>
            </div>
            <div className="section1">
                <div className="introduction">
                    <div className="title">
                        Embrace the Power of Positivity and Self-Discovery with <b>Good Fortune</b>: 
                        Your Path to Happiness and Enlightenment!
                    </div>
                    <div className="buttons">
                        <Link className="nav-link" to ="/user"><div className="register-button" id="register" ><b>Meet Althea here!</b></div></Link>
                        {/* <a href="#"><div className="moreinformation-button">Read more about Good Fortune</div></a> */}
                    </div>
                </div>
                <div className="coverImage">
                    <img src={coverImage} alt="coverImage" />
                </div>
            </div>
            <div className="section2">
                <div className="left">
                    <img src={picture2} alt="picture1" />
                </div>
                <div className="right">
                    Meet Althea, <br />Your Guiding Light to Positivity and Wisdom!
                </div>
            </div>
            <div className="section3">
                <div className="left">
                    <img src={picture1} alt="picture2" />
                </div>
                <div className="right">
                    Delve into a collection of timeless wisdom with our daily proverbs!
                </div>
            </div>

            <div className="section4">
                <div className="brand">
                    <img src={favicon} alt="icon" />
                    <div className="name">Good Fortune</div>
                </div>
                <div className="footer">
                    <img src={instagram} alt="insta" />
                    <img src={twitter} alt="twitter" />
                    <img src={youtube} alt="yt" />
                    <div className="copyright">
                        ©Good Fortune 2023 - all rights reserved
                    </div>
                </div>
                <Link className="nav-link" to ="/"><div className="back">&#8593; Back to top</div></Link>
            </div>
        </div>
    );
}