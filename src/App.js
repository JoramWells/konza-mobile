import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import HomeScreen from './components/HomeScreen';
import Navigation from './components/Navigation';
import ServicesScreen from './components/ServicesScreen';
import TrafficScreen from './components/TrafficScreen';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/services" exact component={ServicesScreen} />
        <Route path="/traffic" exact component={TrafficScreen} />
      </Switch>

    </Router>

  );
}

export default App;
