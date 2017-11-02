import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewArticle from './component/createNewArticle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateNewArticle />
      </div>
    );
  }
}

export default App;
