import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./pages";
import SigninPage from "./pages/Signin";

const App = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" exact  component={Home} />
            <Route path="/signin" exact component={SigninPage}/>
        </Switch>
    </Router>
  );
};

export default App;
