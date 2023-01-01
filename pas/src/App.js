import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './component/Login';
import AfLogin from './component/AfLogin';
// import AfLogin from './component/AfLogin';
// const Logindata = require('./component/Login');
// import AfLogin from './component/AfLogin';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/display" exact component={AfLogin}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;