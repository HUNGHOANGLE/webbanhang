import React, {useState} from 'react'
import Topnav from '../topnav/Topnav'
import Sidebar from '../sidebar/Sidebar'
import Admin_route from '../app_route/Admin_route'

import { BrowserRouter, Route} from 'react-router-dom'

import './admin_layout.css'


const Admin_layout = () => {
  
  const[showSideBar,setShowSideBar] = useState(true);

  const hideSideBar = () => {
    console.log('click')
    setShowSideBar(!showSideBar)
  }
  return (
    <BrowserRouter>
        <Route render={(props)=>(
          <div className='layout'>
              <div className={showSideBar ? 'layout__sideBar' : 'layout__sideBar noSideBar'}>
                <Sidebar {...props}/>
              </div>
              
              <div className={showSideBar ? 'layout__content' : 'layout__content noSideBar'}>
                  <Topnav className='layout__content-navbar'  hideSideBar={hideSideBar}/>
                  <div className="layout__content-main">
                      <Admin_route/>
                  </div>
              </div>
          </div>
        )}/>
    </BrowserRouter>
  )
}

export default Admin_layout
