import React, { Component } from 'react';
import { database } from '../firebase';
import map from 'lodash/map';
import CreateNewArticle from './createNewArticle';
import './listOfArticles.css';

class ListOfArticles extends Component{

    constructor(props){
        super(props);
        this.state = { 
            articles: null
        }
    }


    componentDidMount = () => {
        const articles = database.ref('/articles');
        articles.on('value', snapshot => {
            this.setState({ articles: snapshot.val() });      
          })
    };
    
    render(){
        const { articles } = this.state
        return(
            <div className='articlels'>
                {
                    map(articles, (article, key)=>
                        <p key={key}>{article.text}</p>
                    )
                }
            </div>
        )
    }
}
export default ListOfArticles;