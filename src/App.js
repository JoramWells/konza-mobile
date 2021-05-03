import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
      </Switch>

    </Router>

  );
}

export default App;
