import React, { Component } from 'react';
import firebase from 'firebase';

class CreateNewArticle extends Component{
    
    constructor(props){
        super(props);
        this.state = {articles: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount = () => {
        this.firebaseRef = firebase.database().ref('/');
        this.firebaseRes.on('value', function(dataSnapshot){
            this.articles.push(dataSnapshot.val());
            this.setState({
                articles: this.articles
            })
        })
    }
    
    render(){
        return(
            <div >
                <ListOfArticles articles={this.state.articles}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text}/>
                    <button>
                        ADD {this.state.articles.length +1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newArticle = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            articles: prevState.articles.concat(newArticle),
            text: ''
        }));

    }
}
    class ListOfArticles extends Component{
        render(){
            return (
                <ul>
                    { this.props.articles.map(article => (
                        <li key={article.id}>{article.text}</li>
                    ))}
                </ul>
            )
        }
    }

export default CreateNewArticle;