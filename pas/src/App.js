import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './component/Login';
import AfLogin from './component/AfLogin';


function App() {
  

  return (
    <div>
  
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/AfLogin" component={AfLogin}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;