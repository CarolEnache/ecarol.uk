import React, { Component } from 'react';
import CreateNewArticle from './createNewArticle';
import './listOfArticles.css';

class ListOfArticles extends Component{

    render(){

        return(
            <ul>
                { this.gigi.map(items =>{
                    return <li>{items.text}</li>
                })}
            </ul>
        )
    }
}

export default ListOfArticles;