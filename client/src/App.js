
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Class from './components/Class/Class';
import Navbar from "./components/Navbar/Navbar";

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path = '/class/:id' component = {Class} />
      </Switch>
    </div>
  )
}

export default App;
