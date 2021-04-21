import {
  Route,
  Switch,
  BrowserRouter as Router
  } from 'react-router-dom';


import Header from './components/header/Header';
import Login from './components/login/Login';
import Transfer from './components/transfer/Transfer';
import Wallet from './components/wallet/Wallet';
import Register from './components/register/Register';
import Transact from './components/transact/Transact';

export default function App() {
  return (
    <Router>
    <Header />
    <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/wallet'>
            <Wallet />
          </Route>
          <Route path='/transact'>
            <Transact />
          </Route>
          <Route path='/transfer'>
            <Transfer />
          </Route>
      </Switch>
  </Router>
   
  );
}
