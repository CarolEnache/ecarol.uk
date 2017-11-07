import React, { Component } from 'react';
import { database } from '../firebase';

class CreateNewArticle extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            title: ' ',
            subtitle: ' ',
            text: ' '
        }
    };

    componentWillMount = () => {
        this.firebaseRef = database.ref('/articles');
    };

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    
    pushToFirebase = () => {
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
        const { title, subtitle, text } = this.state;
        return(
            <div className='CreateNewArticle'>
                <form >
                    <input type='text' name='title' onChange={this.onChange} value={title} placeholder='TITLE'/>
                    <input type='text' name='subtitle' onChange={this.onChange} value={subtitle} placeholder='SUBTITLE'/>
                    <input type='text' name='text' onChange={this.onChange} value={text} placeholder='ARTICLE CONTENT'/>
                    <button onClick={this.pushToFirebase}>
                        ADD
                    </button>
                </form>
            </div>
        );
    }
};

export default CreateNewArticle;