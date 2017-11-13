import React, { Component } from 'react';
import { database } from '../firebase';
import map from 'lodash/map';

class ListOfArticles extends Component{
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
        const { articles } = this.state
         return(
             <div>
                 <h1>List of Articles</h1>
                 <div className='articles'>
                        {
                            map(articles, (article, key) => 
                                <form key={key}>
                                <input type='checkbox' name='article' value='key'/>{article.title}
                                {/* <p>{article.subtitle}</p>  */}
                                </form>
                            )
                        }
                 </div>
             </div>
        )
    }
}

export default ListOfArticles;