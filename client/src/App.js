
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {Switch, Route} from 'react-router-dom';
//import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </div>
  )
}

export default App;
