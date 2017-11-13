import React, { Component } from 'react';
import CreateNewArticle from './component/createNewArticle';
import EditArticles from './component/editArticles';
import ShowArticle from './component/showArticle';

class App extends Component {


  render() {
    return (
      <div>
        <CreateNewArticle />
        <EditArticles />
        <ShowArticle />
      </div>
    );
  }
}

export default App;
