import React, { Component } from 'react';
import CreateNewArticle from './component/createNewArticle';
import ListOfArticles from './component/listOfArticles';

class App extends Component {
  render() {
    return (
      <div>
        <CreateNewArticle />
      </div>
    );
  }
}

export default App;
