import React, { Component } from 'react';
import { database } from '../firebase';
import './createNewArticle.css'

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
                <form className='createNewArticleForm' >
                    <input type='text' className='creatTitle' name='title' onChange={this.onChange} value={title} />
                    <input type='text' className='creatSubtitle' name='subtitle' onChange={this.onChange} value={subtitle} placeholder='SUBTITLE'/> 
                    <textarea type='text' className='creatText' name='text' onChange={this.onChange} value={text} placeholder='ARTICLE CONTENT'/>
                    <button onClick={this.pushToFirebase}>
                        ADD
                    </button>
                </form>
            </div>
        );
    }
};

export default CreateNewArticle;