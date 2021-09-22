import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Orders from './Components/Orders/Orders';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login'; 

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return ( 
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p>Name: {loggedInUser.name}</p>
        <Router>
          <Header></Header>
          <div>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/checkout/:checkoutid">
                <Checkout />
              </PrivateRoute>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider> 
  );
}
export default App;
