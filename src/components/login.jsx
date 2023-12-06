import React, { useState }  from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import '../css/login.css';
import carousel01 from '../img/carousel01.svg';
import carousel02 from '../img/carousel02.svg';
import carousel03 from '../img/carousel03.svg';
import google from '../img/Google.svg';
import Carousel from 'react-bootstrap/Carousel';

import configData from "../config.json";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
      });
     
      const navigate = useNavigate();
      
      // These methods will update the state properties.
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      
      // This function will handle the submission.
      async function onSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const loginCredentials = { ...form };

      
        let response = await fetch(configData.SERVER_URL+"/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginCredentials),
        })
        .catch(error => {
            navigate("/register");
          window.alert("PLEASE TYPE THE CORRECT EMAIL AND PASSWORD!");
          console.error("Error fetching data:", error);
          return;
        });
        
        if (response.ok) {
            navigate("/user")
        } else {
            setForm({ email: "", password: "" });
            navigate("/login")
        }
        
        // setForm({ email: "", password: "" });
        // navigate("/user")
      }

    return(
        <div className="container-text-center">
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel01}
                            alt="slider image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel02}
                            alt="slider image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel03}
                            alt="slider image"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="login-block">
                <div className="title">Good Fortune</div>
                <div className="sub-title">~ Mystical AI Insights ~</div>
                <div className="loginContainer">
                <form onSubmit={onSubmit} data-testid="form">
                    <label className="email" for="email">Email</label>
                    <input 
                        type="text" 
                        placeholder="Enter Eamil"
                        id="email" 
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                    required/>
                    <label className="password" for="password">Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        id="password" 
                        value={form.password}
                        onChange={(e) => updateForm({ password: e.target.value })}
                    required/>
                    <div className="psw">Forgot <a href="#"><u>password?</u></a></div>
                    <input
                        type="submit"
                        value="Login"
                        className="btn-primary"
                    />
                    </form>
                    <div className="horizontal-line">or</div>
                    <a href="#"><button type="email">
                        <img src={google} alt="google"/>
                        <div className="elogin"><b>Continue with Google</b></div>
                    </button>
                    </a>
                    <div className="newac">
                        <Link className="nav-link" to ="/register">New Travelers? <u>Create An Account</u></Link>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}