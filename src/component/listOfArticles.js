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

    componentWillMount = (key) => {
        this.firebaseRef = database.ref('/articles');
    };

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

    onSubmit = (e, key) =>{
        e.preventDefault();
        const updates= {};
        updates[`/articles/${key}`] = this.state;
        database.ref().update(updates);
    }

    handleDelete = key => {
        database.ref(`/articles/${key}`).set(null)

    }

    render(){
        const { articles, title, subtitle, text } = this.state
        return(
            <div className='articles'>
                {
                    map(articles, (article, key)=>
                    <form key={key} onSubmit={this.onSubmit} className='article'>

                        <input type='text' name='title' value={title} onChange={this.onChange} />
                        <input type='text' name='subtitle' value={subtitle} onChange={this.onChange} />
                        <input type='text' name='text' value={text} onChange={this.onChange} />
                        <button type='submit'>Submit</button>
                        <button className='delete' onClick={()=>this.handleDelete(key)}>Delete</button>
                    </form>
                    )
                }
            </div>
        )
    }
}
export default ListOfArticles;