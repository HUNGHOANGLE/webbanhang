import React from "react";

import { Route, Routes} from "react-router-dom";
import MyProfile from '../myprofile/MyProfile';
import Buying from "../buying/Buying";
import Selling from "../selling/Selling";
import Following from "../following/Following";
function Component(){
    return(
        <Routes>
            <Route path="" element={<MyProfile />} />
            <Route path="/buying" element={<Buying />} />
            <Route path="/selling" element={<Selling />} />
            <Route path="/following" element={<Following />} />
            
        </Routes>
    )
}
export default Component