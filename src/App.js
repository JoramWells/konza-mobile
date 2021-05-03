import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import HomeScreen from './components/HomeScreen';
import Navigation from './components/Navigation';
import ServicesScreen from './components/ServicesScreen';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/services" exact component={ServicesScreen} />
      </Switch>

    </Router>

  );
}

export default App;
