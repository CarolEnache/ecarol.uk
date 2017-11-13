import React, { Component } from 'react';
import { database } from '../firebase';
import map from 'lodash/map';

class ShowArticle extends Component{

    constructor(props) {
        super(props);
        this.state = {
            articles: null,
            title: '',
            subtitle: '',
            text: ''
        }
    }

    componentDidMount = () => {
        const articles = database.ref('/articles');
        articles.on('value', snapshot => {
            this.setState({ articles: snapshot.val() });
        });
    };
    

    render(){
        const { articles } = this.state;
        console.log({articles})
        return(
            <div>
                {
                    map(articles, (article, key) =>
                        <div key={key}>
                            <h1 defaultValue={article.title}>{article.title}</h1>
                            <h2>{article.subtitle}</h2>
                            <p>{article.text}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ShowArticle;