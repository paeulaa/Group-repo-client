import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import signout from '../img/signoutPage.svg';
import '../css/signout.css';
import Main from "./main";

export default function Signout() {
    return(
        <div className="container">
            <div className="pic-container">
                <Link className="nav-link" to ="/">
                    <button className="back">Back to Main Page</button>
                </Link>
                <img
                    className="sign-out-background"
                    src={signout}
                    alt="slider image"
                />
            </div>
        </div>
    )
};