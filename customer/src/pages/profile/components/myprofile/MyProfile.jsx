import React, { useState } from 'react';
import './myprofile.css';
import { UserContext } from '../../../../UserContext';
import { Modal, Form, Button } from 'react-bootstrap';
const MyProfile = () => {
    const { user } = React.useContext(UserContext);

    // Hanlde Password popup

    const [showResetPass, setShowResetPass] = useState(false);
    const handlePasswordPopupClose = () => setShowResetPass(false);
    const handlePasswordPopupOpen = () => setShowResetPass(true);
    // Password data

    const [currentPassword, setCurrentPassword] = useState();
    const setCurrentPasswordData = (e) => {
        setCurrentPassword(e.target.value);
    }
    const [newPassword, setNewPassword] = useState();
    const setNewPasswordData = (e) => {
        setNewPassword(e.target.value);
    }
    const [reNewPassword, setReNewPassword] = useState();
    const setReNewPasswordData = (e) => {
        setReNewPassword(e.target.value);
    }

    // Validate popup

    const [isvalidate, setIsvalidate] = useState(false);
    const handleValidatePopupClose = () => setIsvalidate(false);
    const handleValidatePopupOpen = () => setIsvalidate(true);

    // Not similar popup
    const [isSimilar, setIsSimilar] = useState(false);
    const handleSimilarPopupClose = () => setIsSimilar(false);
    const handleSimilarPopupOpen = () => setIsSimilar(true);

    // Save change handles
    const handleSave = () => {
        if (currentPassword == "") {
            handleValidatePopupOpen();
        }else {
            if (newPassword == "") {
                handleValidatePopupOpen();
            }else {
                if (reNewPassword == "") {
                    handleValidatePopupOpen();
                }else {
                    if (reNewPassword != newPassword){
                        handleSimilarPopupOpen();
                    } else {
                        alert("Your change succesfully")
                        handlePasswordPopupClose();
                    }
                }
            } 
        }

    }
    return (
        <div className='profile'>
            <div className="profile_header">
                <div className="header_left">
                    <h3>Profile</h3>
                </div>
                <div className="header_right">
                    <button className='buttonEdit' >Edit</button>
                </div>

            </div>
            <hr />
            <div className="profile_body">
                <div className="row">
                    <div className="col-4">
                        <h5>Name</h5>
                        <p>{user.name}</p>
                    </div>
                    <div className="col-4">
                        <h5>Shoes size</h5>
                        <p>Not set</p>
                    </div>
                    <div className="col-4">
                        <h5>Email address</h5>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h5>UserName</h5>
                        <p>{user.email}</p>
                    </div>
                    <div className="col-4">
                        <h5>Reset password</h5>
                        <button onClick={handlePasswordPopupOpen} className='buttonChangePass'>Reset password</button>
                    </div>
                </div>
            </div>
            <Modal show={showResetPass} onHide={handlePasswordPopupClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your current password</Form.Label>
                            <Form.Control
                                value={currentPassword}
                                onChange={setCurrentPasswordData}
                                type="password"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your new password</Form.Label>
                            <Form.Control
                                value={newPassword}
                                onChange={setNewPasswordData}
                                type="password"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ReEnter your password</Form.Label>
                            <Form.Control
                                value={reNewPassword}
                                onChange={setReNewPasswordData}
                                type="password"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePasswordPopupClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal size='sm' style={{marginTop: 100}} show={isvalidate} onHide={handleValidatePopupClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:"orange"}}>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{color:"red"}}>Woohoo, you're missing some fields</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleValidatePopupClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal size='sm' style={{marginTop: 100}} show={isSimilar} onHide={handleSimilarPopupClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:"orange"}}>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{color:"red"}}>Your new password and renew password don't similar</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSimilarPopupClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MyProfile
