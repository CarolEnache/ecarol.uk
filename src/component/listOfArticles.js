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

    componentWillMount = (article, key) => {
        this.firebaseRef = database.ref('/articles');
    };

    componentDidMount = () => {
        const articles = database.ref('/articles');
        articles.on('value', snapshot => {
            this.setState({ articles: snapshot.val() });     
        });        
    };
    
    
    handleTitle=(ev, key) => {
        database.ref(`/articles/${key}`).update({title:ev.target.value})
    }
    handleSubtitle=(ev, key) => {
        database.ref(`/articles/${key}`).update({subtitle: ev.target.value})
    }

    handleText=(ev, key) => {
        database.ref(`/articles/${key}`).update({text:ev.target.value})
    }

    handleDelete = key => {
        database.ref(`/articles/${key}`).set(null)

    }


    render(){
        const { articles } = this.state
        return(
            <div className='articles'>
                {
                    map(articles, (article, key)=>
                    <div key={key} className='article'>

                        <textarea 
                        className='title'
                        onChange={e => this.handleTitle(e, key)}
                        defaultValue={article.title}/> 
                    
                        <textarea
                        className='subtitle'
                        onChange={ e => this.handleSubtitle(e, key)}
                        defaultValue={article.subtitle}
                        />
                        <textarea
                        className='text' 
                        onChange={ e => this.handleText(e, key)}
                        defaultValue={article.text}
                        />
                        <button className='delete' onClick={()=>this.handleDelete(key)}>Delete</button>
                    </div>
                    )
                }
            </div>
        )
    }
}
export default ListOfArticles;