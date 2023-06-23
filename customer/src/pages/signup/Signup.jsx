import React, { Component } from "react";
import { Link  } from "react-router-dom";
import './signup.css'
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import API from '../../API/config';

const SignUp = props => {
    const [username, setUserName] = React.useState("");
    const [password, setPassWord] = React.useState("");
    const [name, setName] = React.useState("");
    
    // Open-close popup validate
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Open-close popup user has been created ?
    const [userErr, setUserErr] = React.useState(false);
    const handleCloseUserErr = () => setUserErr(false);
    const handleShowUserErr = () => setUserErr(true);

    // SignUp success
    const [userSuccess, setUserSuccess] = React.useState(false);
    const handleCloseUserSuccess = () => setUserSuccess(false);
    const handleShowUserSuccess= () => setUserSuccess(true);

    // Validate user-pass
    const checkvalidate = () =>{
        if (username === "" || password === "") {
            handleShow()
        } else return true;
    }
    const handleLogin = () =>{
        if (checkvalidate() === true ){
        axios
            .post(
                `${API.URL_CUSTOMER_SIGNUP}`,
                {
                    name,
                    email: username,
                    password
                }
            )
            .then(res => {

                handleShowUserSuccess();
            })
            .catch(err => {
                localStorage.setItem('isLogin',false);
                handleShowUserErr();
                console.log(err);
            });
                
                
                
        }
    }
        return (
          <div className="login_form">
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        
                        className="form-control" 
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <Button   onClick={()=>handleLogin()} variant="primary" >Submit</Button>
                <p className="forgot-password text-right">
                    Have account <Link to="/login"> → LogIn</Link>
                </p>
                    
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title style={{color: "red"}}>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are missing user or password</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={userErr} onHide={handleCloseUserErr}>
                <Modal.Header closeButton>
                <Modal.Title style={{color: "red"}}>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your username or password not true</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseUserErr}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={userSuccess} onHide={handleCloseUserSuccess}>
                <Modal.Header closeButton>
                <Modal.Title style={{color: "green"}}>Create Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Congratulation !!!</Modal.Body>
                <Modal.Footer>
                <Link to="/login" >
                    <Button variant="secondary">
                        OK
                    </Button>
                </Link>
                </Modal.Footer>
            </Modal>
          </div>
        );
    }
    export default SignUp;