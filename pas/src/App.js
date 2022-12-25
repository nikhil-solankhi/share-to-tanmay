import logo from './logo.svg';
import './App.css';
import login from "./components/Login";
import Header from './components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div>
       <Header></Header>
      <Router>
        <Switch>
          <Route path="/" exact component={login}></Route>
          <Route path="/view/:empid" component={EmployeeDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
