import React, { Component } from 'react';
import CreateNewArticle from './component/createNewArticle';
import ListOfArticles from './component/listOfArticles';
import ShowArticle from './component/showArticle';

class App extends Component {


  render() {
    return (
      <div>
        <CreateNewArticle />
        <ListOfArticles />
        <ShowArticle />
      </div>
    );
  }
}

export default App;
