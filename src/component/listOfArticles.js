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
        this.handleChange = this.handleChange.bind(this);
        // this.handleSelect = this.handleSelect.bind(this);
    }
    componentDidMount = () => {
        const articles = database.ref('/articles');
        articles.on('value', snapshot => {
            this.setState({ articles: snapshot.val() });     
          });        
    };

    componentWillMount = (article, key) => {
        this.firebaseRef = database.ref('/articles');
    };

    handleSelect=(ev, key) => {
        database.ref(`/articles/${key}`).set({text:ev.target.value})
    }

    handleDelete=key => {
        // database.ref(`/articles/${key}`).set({text:ev.target.value})
        database.ref(`/articles/${key}`).set(null)

    }

    handleChange(event, key) {
        const text = event.target.value
        // const  articleRef = database.ref('/articles').child(key)
    }

    render(){
        const { articles } = this.state
        return(
            <div className='articlels'>
                {
                    map(articles, (article, key)=>
                    <div key={key}>
                        
                        <textarea 
                        onChange={e=>this.handleSelect(e, key)}
                        defaultValue={article.text}
                        />
                        <button onClick={()=>this.handleDelete(key)}>Delete</button>
                    </div>
                    )
                }
            </div>
        )
    }
}
export default ListOfArticles;