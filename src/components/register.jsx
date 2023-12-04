import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import '../css/register.css';
import carousel01 from '../img/carousel01.svg';
import carousel02 from '../img/carousel02.svg';
import carousel03 from '../img/carousel03.svg';
import google from '../img/Google.svg';
import Carousel from 'react-bootstrap/Carousel';
import configData from "../config.json";

export default function Register() {
    const [form, setForm] = useState({
        firstName: "",
        lastName:"",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
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
        const newUser = { ...form };
    
        await fetch(configData.SERVER_URL+"/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        // .then ((res)=> res.json())
        // .then((response) => {
        //     console.log(response.status); // Log the HTTP status
        //     return response.json();
        // })
        .then ((data) => {
            console.log(data, "userRegister");
        })
        .catch(error => {
            window.alert(error);
            return;
        });
    
        setForm({ firstName: "", lastName:"", email: "", confirmEmail: "", password: "", confirmPassword: "" });
        // console.log(form);
        navigate("/user");
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
                <div className="sub-title">Create An Account</div>
                <div className="loginContainer">
                    <form onSubmit={onSubmit}>
                        <div className="gird-container">
                            <div className="block-1">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    name="firstName" 
                                    id="firstName"
                                    value={form.firstName}
                                    onChange={(e) => updateForm({ firstName: e.target.value })}
                                required/>
                            </div>
                            
                            <div className="block-2">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Last Name" 
                                    name="lastName" 
                                    id="lastName"
                                    value={form.lastName}
                                    onChange={(e) => updateForm({ lastName: e.target.value })}
                                required/>
                            </div>
                            
                            <div className="block-3">
                                <label htmlFor="email">Email address</label>
                                <input 
                                    type="text" 
                                    placeholder="Email address" 
                                    name="email" 
                                    id="email"
                                    value={form.email}
                                    onChange={(e) => updateForm({ email: e.target.value })}
                                required/>
                            </div>
                            
                            <div className="block-4">
                                <label htmlFor="c-email">Confirm Email Address</label>
                                <input 
                                    type="text" 
                                    placeholder="Confirm Email Address" 
                                    name="c-email" 
                                    id="confirmEmail"
                                    value={form.confirmEmail}
                                    onChange={(e) => updateForm({ confirmEmail: e.target.value })}
                                required/>
                            </div>
                            
                            <div className="block-5">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    placeholder="Enter Password" 
                                    name="password" 
                                    id="password"
                                    value={form.password}
                                    onChange={(e) => updateForm({ password: e.target.value })}
                                required/>
                            </div>
                            
                            <div className="block-6">
                                <label htmlFor="password">Confirm Password</label>
                                <input 
                                    type="password" 
                                    placeholder="Enter Password" 
                                    name="password" 
                                    id="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={(e) => updateForm({ confirmPassword: e.target.value })}
                                required/>
                            </div>
                        </div>
                        <div className="psw">Forgot <a href="#"><u>password?</u></a></div>
                        <input
                            type="submit"
                            value="Sign up"
                            className="btn-primary"
                        />
                        {/* <a href="#">
                            <button type="submit">
                                <b>Sign up</b>
                            </button>
                        </a> */}
                        <div className="horizontal-line">or</div>
                        <a href="#"><button type="email">
                            <img src={google} alt="google"/>
                            <div className="elogin"><b>Sign up with Google</b></div>
                        </button>
                        </a>
                        <div className="newac">
                            <Link className="nav-link" to ="/login">Already have an account?  <u><b>Login here</b></u></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}