import React from 'react'

import SideBar from './components/sidebar/SideBar'
import MyProfile from './components/myprofile/MyProfile'
import './accountlayout.css'
import Component from './components/router/profileRouter'


const AccountLayout = () => {

    return (
        <div className='account__layout'>
            <SideBar />
            <div className="account__layout__content">
                <Component />
            </div>
        </div>

    )
}

export default AccountLayout
