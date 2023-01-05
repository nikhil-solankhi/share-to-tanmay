import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './component/Login';
import AfLogin from './component/AfLogin';
import ViewForms from './component/ViewForms'
import Editprofile from './component/Editprofile'


function App() {
  

  return (
    <div>
  
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/AfLogin" component={AfLogin}></Route>
          <Route path="/ViewForms" component={ViewForms}></Route>
          <Route path="/Editprofile" component={Editprofile}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;