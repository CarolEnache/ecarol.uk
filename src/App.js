import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateNewArticle from './component/createNewArticle';
import EditArticles from './component/editArticles';
import ShowArticle from './component/showArticle';
import ListOfArticles from './component/listOfArticles';

class App extends Component {


  render() {
    return(
      <Router>
        <div>
          <Route exact path='/' component={ListOfArticles} />
          <Route path='/create' component={CreateNewArticle}/>
        </div>
      </Router>

    )
  }
}

export default App;
