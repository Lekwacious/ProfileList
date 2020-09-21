import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Note from './components/Note';
import Error from './components/404/Error';
import UserProfile from './components/profile/UserProfile';
import UserList from './components/profile/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path='/profile' component={UserProfile}/>

        <Route path='/' component={UserList}/>
      <Route path='/note' component={Note}/>
      <Route component={Error}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
