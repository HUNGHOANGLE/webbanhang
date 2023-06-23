import React, { useContext } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import { UserContext } from "../../../../UserContext";
import "./sidebar.css";
const SideBar = () => {
  let navigate = useNavigate();
  const {user, setUser} = useContext(UserContext)
  const handleLogout =(e)=>{
    setUser(null);
    navigate("/");
  }
  return (
    <div className='account__sidebar'>
      
          <Link to="./" className="component">
                <div className="component_left">
                  <i class='bx bx-user-pin bx-flip-horizontal' ></i>
                </div>
                <div className="component_right">
                    <strong>Profile</strong>
                    <p>Learn what's unique to you</p> 
                </div>
          </Link>
          <Link to="./buying" className="component">
                <div className="component_left">
                  <i class='bx bx-cart-alt'></i>
                </div>
                <div className="component_right">
                    <strong>Buying</strong>
                    <p>Active bids, In progress, Complete order</p> 
                </div>
          </Link>
          <Link to="./selling" className="component">
                <div className="component_left">
                  <i class='bx bx-money-withdraw' ></i>
                </div>
                <div className="component_right">
                    <strong>Selling</strong>
                    <p>Learn what's unique to you</p> 
                </div>
          </Link>
          <Link to="./following" className="component">
                <div className="component_left">
                  <i class='bx bxs-webcam'></i>
                </div>
                <div className="component_right">
                    <strong>Following</strong>
                    <p>Following something</p> 
                </div>
          </Link>
          <div className="component"
            onClick={handleLogout}
          >
            <div className="component_left">
              <i class='bx bx-power-off' ></i>
            </div>
            <div className="component_logout">
                <strong>Log out</strong> 
            </div>
          </div>
          
    </div>
  );
}

export default SideBar;
