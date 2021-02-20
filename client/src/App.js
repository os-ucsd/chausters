import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
