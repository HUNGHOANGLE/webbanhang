import React, { useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import './login.css'
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import API from '../../API/config';
import { UserContext } from "../../UserContext";

const Login = props => {
    const {user, setUser} = useContext(UserContext)
    const [username, setUserName] = React.useState("");
    const [password, setPassWord] = React.useState("");
    let navigate = useNavigate();
    // Open-close popup validate
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Open-close popup user has been created ?
    const [userErr, setUserErr] = React.useState(false);
    const handleCloseUserErr = () => setUserErr(false);
    const handleShowUserErr = () => setUserErr(true);

    //Login true
    const handleUserSuccess = (check) =>{
        if (check){
            navigate("/");
        }
    }
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
                `${API.URL_CUSTOMER_SIGNIN}`,
                {
                    email: username,
                    password
                }
            )
            .then(res => {

                localStorage.setItem('isLogin',true);
                localStorage.setItem('user',res.data.user);
                setUser(res.data.user)
                handleUserSuccess(true);
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
                <h3>Log in</h3>
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
                    Don't have account <Link to="/signup"> → SignUp</Link>
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
            
          </div>
        );
    }
    export default Login;