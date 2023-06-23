import React ,{useLocation, useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../../pages/home/Home';
import Products from '../../pages/products/Products';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';
import AccountLayout from '../../pages/profile/AccountLayout';
import Sell from '../../pages/sell/Sell';
import New from '../../pages/imagePage/New';
import Authantication from '../../pages/imagePage/Authantication';
import HowItWork from '../../pages/imagePage/HowItWork';
import Selling from '../../pages/imagePage/Selling';
import Buying from '../../pages/imagePage/Buying';
const CustomerRouter = () => {

  return (
      <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route path="/product" element={ <Products/> }/>
          <Route path="/productdetail" element={ <ProductDetail/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signup" element={ <Signup/> }/>
          <Route path="/profile/*" element={ <AccountLayout/> }/>
          <Route path="/sell" element={ <Sell/> }/>
          <Route path="/new" element={ <New/> }/>
          <Route path="/authantication" element={ <Authantication/> }/>
          <Route path="/how-it-work" element={ <HowItWork/> }/>
          <Route path="/buying-guide" element={ <Buying/> }/>
          <Route path="/selling-guide" element={ <Selling/> }/>
      </Routes>
    );
}
export default CustomerRouter;
