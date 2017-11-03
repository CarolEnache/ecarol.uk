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
          });        
    };

    handleSelect(key){
        database.ref('/articles')
            .child(key)
            console.log(key)
        }
    
    render(){
        const { articles } = this.state
        return(
            <div className='articlels'>
                {
                    map(articles, (article, key)=>
                        <p key={key}
                        onClick={()=>{
                            this.handleSelect(key)
                            }}>{article.text}</p>
                    )
                }
            </div>
        )
    }
}
export default ListOfArticles;