import React from 'react';
import './App.css';
import Login from "./components/Login";
import Friends from "./components/Friends";

import { Route, Link, Redirect } from 'react-router-dom';

// With protected Routes, you'll be redirected to another page without the if statement being truthy
const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')) {
      return <Component {...props}/>;
    } else {
      return <Redirect to="/login"/>
    }
  }}/>
};

const protectRoute = Component => props => {
    if(localStorage.getItem('token')) {
        return <Component {...props}/>;
    } else {
        return <Redirect to="/login"/>
    }
};

const ProtectedFriends = protectRoute(Friends);

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <ProtectedRoute path="/friends" component={Friends}/>
    </div>
  );
}

export default App;
