import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from './../Feelings/Feelings.js'; //Feelings page added
import Understanding from './../Understanding/Understanding.js';//Understanding page added
import Support from './../Support/Support.js'; //Support page added
import Comments from './../Comments/Comments.js'; // Comments page added
import Results from './../Results/Results.js';  //Results page added



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={Feelings} />
            <Route exact path="/understanding" component={Understanding}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/comments" component={Comments}/>
            <Results/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
