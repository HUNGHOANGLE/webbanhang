import React, {useContext} from "react";
import { Modal, Form , Button} from "react-bootstrap";
import sizeDATA from "../../assets/json/size.json";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
function SellSize(props){
    const {user} = useContext(UserContext);
    const [price,setPrice] = React.useState();
    // Check popup
    const [isSell, setIsSell] = React.useState(false);
    const [isUser, setIsUser] = React.useState(true);
    const [isLeft, setIsLeft] = React.useState(false);
    const [isLocation, setIsLocation] = React.useState(false);
    
    const [ask,setAsk]= React.useState();
    const setAskData =(e) =>{
        setAsk(e.target.value);
    }
    const handleChangePrice = (e) =>{
        setPrice(e.target.value * 10 + 7);
    }
    // Checking
    const closeCheck = () =>{
        setIsUser(true);
    }
    const CheckMore = () =>{
        setIsLeft(!isLeft);
    }
    const CloseLocation = () =>{
        setIsLocation(!isLocation);
    }
    const CloseLocation2 = () =>{
        setIsLocation(!isLocation);
        alert("Buying sucess");
    }
    const handleNext = ()=>{
        
        if ( user ){
            if (isSell){
                CloseLocation();
            }else{
                if ( ask < price) {
                    CheckMore();
                } else {
                    if (ask > 0) alert("Your ask have save")
                }
            }
        }else{
            setIsUser(false);
        }
    }
    return(
        <Modal size="lg" show={props.view} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Select Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Choose your shoes size</Form.Label>
                <Form.Select style={{width: 200,}} onChange={handleChangePrice} aria-label="Default select example">
                    {
                        sizeDATA.map((item,index) => (
                            <option value={item.size}>{item.size}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{fontSize: 20,}} >Highest bid: {price} $ </Form.Label>
              
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Sell</Form.Label>
              <Form.Group>
                <Button variant="info" onClick={()=>setIsSell(false)} >
                    Place Ask
                </Button>
                <Button style={{marginLeft: 20,}} variant="success" onClick={()=>setIsSell(true)} >
                    Sell now
                </Button>
              </Form.Group>
              { isSell ? (
                  <Form.Label style={{fontSize: 28, marginTop: 20}} > {price} $</Form.Label>
              ):(
                  <Form.Control 
                    value={ask}
                    onChange={setAskData}
                    style={{marginTop: 20,}} 
                     
                    rows={1}  
                    placeholder="Enter Ask"
                    type="number"
                />
              )
            }
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        </Modal.Footer>
            <Modal show={!isUser} onHide={closeCheck}>
                <Modal.Header closeButton>
                <Modal.Title style={{color: "red"}}>Please login to continute</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <Button variant="secondary" onClick={closeCheck}>
                    Close
                </Button>
                <Link to="/login">
                    <Button variant="primary" onClick={closeCheck}>
                        Go to login
                    </Button>
                </Link>
                </Modal.Footer>
            </Modal>
            <Modal show={isLeft} onHide={CheckMore}>
                <Modal.Header closeButton>
                <Modal.Title style={{color: "red"}}>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your ask is less than price
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={CheckMore}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal size="lg" show={isLocation} onHide={CloseLocation}>
                <Modal.Header closeButton>
                    <Modal.Title>Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="example: 0915017711"
                        autoFocus
                    />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <Form.Label>Your address</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={CloseLocation}>
                    Close
                </Button>
                <Button variant="primary" onClick={CloseLocation2}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </Modal>
    )
}
export default SellSize;