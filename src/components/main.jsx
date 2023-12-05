import React, { useRef } from "react";
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
    const section1 = useRef(null);
    const section2 = useRef(null);

    const scrollToSection = (elementRef) =>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    }

    return(
        <div className="body">
            <div className="navbar">
                <div className="brand">
                    <img src={favicon} alt="icon" />
                    <div className="name">Good Fortune</div>
                </div>
                <div className="buttons">
                    <a><div className="login-button">
                        <Link className="nav-link" to ="/login">Log in</Link>
                    </div>
                    </a>
                    <Link className="nav-link" to ="/register"><div className="register-button" id="register">Try now!</div></Link>
                </div>
            </div>
            <div ref={section1} className="section1">
                <div className="introduction">
                    <div className="title">
                        Embrace the Power of Positivity and Self-Discovery with <b>Good Fortune</b>: 
                        Your Path to Happiness and Enlightenment!
                    </div>
                    <div className="buttons">
                        <Link className="nav-link" to ="/register"><div className="register-button" id="register" ><b>Try now!</b></div></Link>
                        <div onClick={()=> scrollToSection(section2)} className="moreinformation-button">Read more about <br />Good Fortune</div>
                    </div>
                </div>
                <div className="coverImage">
                    <img src={coverImage} alt="coverImage" />
                </div>
            </div>
            <div ref={section2} className="section2">
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
                    <div className="images">
                        <img src={instagram} alt="insta" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="yt" />
                    </div>
                    <div className="copyright">
                        ©Good Fortune 2023 - all rights reserved
                    </div>
                </div>
                <div onClick={()=> scrollToSection(section1)} className="back">&#8593; Back to top</div>
            </div>
        </div>
    );
}