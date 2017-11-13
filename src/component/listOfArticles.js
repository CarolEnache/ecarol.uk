import React, { Component } from 'react';
import { database } from '../firebase';
import map from 'lodash/map';
import './listOfArticles.css';

class ListOfArticles extends Component{

    constructor(props){
        super(props);
        this.state = { 
            articles: null,
            title: ' ',
            subtitle: ' ',
            text: ' '
        }
    }


    componentDidMount = () => {
        const articles = database.ref('/articles');
        articles.on('value', snapshot => {
            this.setState({ articles: snapshot.val() });     
        });        
    };

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleSubmit = (key) =>{
        database.ref(`/articles/${key}`).update({
            title: this.state.title,
            subtitle: this.state.subtitle,
            text: this.state.text
        })
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
                    <form key={key} onSubmit={this.onSubmit} className='article'>

                        <input type='text' name='title' onChange={this.onChange} onSubmit={this.onSubmit} defaultValue={article.title}/>          
                        <input type='text' name='subtitle' defaultValue={article.subtitle} onChange={this.onChange} />
                        <textarea type='text' name='text' defaultValue={article.text} onChange={this.onChange} />
                        <button type='submit' className='saveButton'onClick={() => this.handleSubmit(key)}>Save</button>
                        <button type='button' className='publishButton'>Publish</button>
                        <button className='delete' onClick={()=>this.handleDelete(key)}>Delete</button>
                    </form>
                    )
                }
            </div>
        )
    }
}
export default ListOfArticles;