import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feelings from './../Feelings/Feelings.js'; //Feelings page added
import Understanding from './../Understanding/Understanding.js';//Understanding page added
import Support from './../Support/Support.js'; //Support page added
import Comments from './../Comments/Comments.js'; // Comments page added
import Results from './../Results/Results.js';  //Results page added
import Finished from './../Finished/Finished.js'; // Finished page added



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <Router>
          <div>
            <Route exact path="/" component={Feelings} />
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/finished" component={Finished} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
