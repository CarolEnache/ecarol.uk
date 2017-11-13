import React, { Component } from 'react';
import { database } from '../firebase';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
import './listOfArticles.css';

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
                 <h1 className='pageTitle'>List of Articles</h1>
                 <div className='articles'>
                     <ul className='control-navigation'>
                         <li className='control-navigation-item'><Link to='/Create'>Create</Link></li>
                         <li className='control-navigation-item'><Link to='/Create'>Create</Link></li>
                         <li className='control-navigation-item'><Link to='/Create'>Create</Link></li>
                         <li className='control-navigation-item'><Link to='/Create'>Create</Link></li>
                     </ul>
                        {
                            map(articles, (article, key) => 
                                <form key={key} className='article'>
                                    <input type='checkbox' name='article' value='key' className='title'/>{article.title}
                                    <p className='subtitle'>{article.subtitle}</p> 
                                </form>
                            )
                        }
                 </div>
             </div>
        )
    }
}

export default ListOfArticles;