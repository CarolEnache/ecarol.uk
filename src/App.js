import React, { Component } from 'react';
import CreateNewArticle from './component/createNewArticle';
import EditArticles from './component/editArticles';
import ShowArticle from './component/showArticle';
import ListOfArticles from './component/listOfArticles';

class App extends Component {


  render() {
    return (
      <div>
        <CreateNewArticle />
        <EditArticles />
        <ShowArticle />
        <ListOfArticles />
      </div>
    );
  }
}

export default App;
