/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blog of Cthullu</h1>
            <span class="glyphicon glyphicon-arrow-down App-arrow"></span>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css';

import Calendar from './Components/Calendar';
import Toggle from './Components/Button';
import Comment from './Components/Comment';
import Post from './Components/Post';
import Upload from './Components/Upload';


class App extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/button">Button</Link></li>
                        <li><Link to="/comment">Comment</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/upload">Upload</Link></li>
                        <li><Link to="/calendar">Calendar</Link></li>
                    </ul>

                    <hr/>

                    <Route path="/calendar" component={Calendar}/>
                    <Route path="/button" component={Toggle}/>
                    <Route path="/comment" component={Comment}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/upload" component={Upload}/>
                </div>
            </Router>
        );
    }
}

export default App;