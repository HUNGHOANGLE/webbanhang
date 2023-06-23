import React, {useState} from 'react';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Login from '../../pages/login/Login';
import Admin_layout from '../layout/Admin_layout';
const App_route = () => {
  const [isAuticated, setIsAuticated] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/login">
            <Login setIsAuticated={setIsAuticated} />
          </Route>
          {isAuticated && (
            <Route path='/admin' component={Admin_layout} />
          )}
          
          <Route path="/">      
            <Redirect to="/login" />
          </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App_route;
