import React, { Component } from 'react';
import './listOfArticles.css';

class ListOfArticles extends Component{

    render(){
        const { newArticles } = props;
        return(
            <ul>
                { this.props.articles.map(article =>{
                    <li key={article.id}>{article.text}</li>
                })}
            </ul>
        )
    }
}

export default ListOfArticles;