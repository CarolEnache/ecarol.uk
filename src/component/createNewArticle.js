import React, { Component } from 'react';
import { database } from '../firebase';

class CreateNewArticle extends Component{
    
    constructor(props){
        super(props);
        this.state = {articles: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount = () => {
        this.firebaseRef = database.ref('/');
    }

    pushToFirebase(event){
        event.preventDefault();
        this.firebaseRef.push({text: this.state.text});
        this.setState({text: ''})
    }
    
    render(){
        return(
            <div >
                <ListOfArticles articles={this.state.articles}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text}/>
                    <button onClick={this.pushToFirebase.bind(this)}>
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