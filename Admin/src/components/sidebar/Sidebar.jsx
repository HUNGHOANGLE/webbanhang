import React from 'react';
import './Sidebar.css';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import sideBar__item from '../../assets/jsonData/sideBar_routes.json'

const SidebarItem = props =>{
    const active = props.active ? 'active' : ''
    return (
        <div className="sidebar__item">
          <div className={`sidebar__item-inner ${active}`}>
            <i className={props.icon}></i>
              <span>
                  {props.title}
              </span>
          </div>           
        </div>
    )
}


const Sidebar = (props) => {

  const activeItem = sideBar__item.findIndex(item => item.route === props.location.pathname)
  return (
    <div className='sidebar'>
        <div className="sidebar__logo">
            <img src={logo} alt ='company logo'/>
        </div>
        {
          sideBar__item.map((item,index)=>(
            <Link to=  {item.route} key ={index}>
                <SidebarItem
                    title = {item.display_name}
                    icon = {item.icon}
                    active = {index === activeItem}
                />
            </Link>
          ))
        }
        <div className='sidebar__footer'>
          <button className='logout_btn' onClick={()=>{window.location.reload();}}>
              <i class='bx bx-log-out'></i>
              Logout
          </button>
        </div>
            
           
              
            
              
  
            
        
    </div>
  );
}

export default Sidebar;
