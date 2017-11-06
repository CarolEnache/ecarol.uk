import React, { Component } from 'react';
import { database } from '../firebase';

class CreateNewArticle extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            title: null,
            subtitle: null,
            text: null
        }
    };

    handleTitle = (e) => {
        e.preventDefault();
        this.setState({ title: e.target.value })
    };

    handleSubtitle = (e) => {
        e.preventDefault();
        this.setState({ subtitle: e.target.value })
    };

    handleText = (e) => {
        e.preventDefault();
        this.setState({ text: e.target.value })
    };

    componentWillMount = () => {
        this.firebaseRef = database.ref('/articles');
    };
    
    pushToFirebase = (event) => {
        this.firebaseRef.push({
            title: this.state.title,
            subtitle: this.state.subtitle,
            text: this.state.text
        });
        this.setState({
            title: ' ',
            subtitle: '',
            text: '',

        })
    };

    
    render(){
        return(
            <div className='CreateNewArticle'>
                <form >
                    <input onChange={this.handleTitle} value={this.state.title} placeholder='TITLE'/>
                    <input onChange={this.handleSubtitle} value={this.state.subtitle} placeholder='SUBTITLE'/>
                    <input onChange={this.handleText} value={this.state.text} placeholder='ARTICLE CONTENT'/>
                    <button onClick={this.pushToFirebase}>
                        ADD
                    </button>
                </form>
            </div>
        );
    }
};

export default CreateNewArticle;