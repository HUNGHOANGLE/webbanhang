import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../pages/home';
import Dashboard from '../../pages/dashboard/Dashboard';
import ChartsPage from '../../pages/dashboard/chart/Chart';
import Customer from '../../pages/customer/Customer';
import Products from '../../pages/products/Products';
import Orders from '../../pages/orders/Orders';
const Admin_route = () => {
  return (
    <Switch>
        <Route path="/admin">      
            <Redirect to="/dashboard" />
          </Route>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/chart'  component={ChartsPage} />
        <Route path='/customer' component={Customer} />
        <Route path='/products' component={Products} />
        <Route path='/orders' component={Orders} />
    </Switch>
  );
}
export default Admin_route;
