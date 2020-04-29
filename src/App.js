import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSlist from './POPOSList.js';
import Footer from './Footer.js';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About.js'
import POPOSDetails from './POPOSDetails.js'

function App() {
  return (
    <Router>

      <div className="App">
       <Title />
       <Route exact path="/" component={POPOSlist} />
       <Route path="/about" component={About} />
       <Route path="/details/:id" component={POPOSDetails} />
       <Footer />
      </div>

    </Router>
  );
}

export default App;
