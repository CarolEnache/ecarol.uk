import React, { Component } from 'react';
import { database } from '../firebase';
import { Link } from 'react-router-dom';
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
                <form className='cna-form' >
                    <div className='cna-header'>
                        <h3>Crete New Article</h3>
                    </div>
                    <input type='text' 
                        className='cna-title' 
                        name='title' 
                        onChange={this.onChange} 
                        value={title} />
                    <input type='text' 
                        className='cna-subtitle' 
                        name='subtitle' 
                        onChange={this.onChange} 
                        value={subtitle} 
                        placeholder='SUBTITLE'/> 
                    <textarea type='text' 
                        className='cna-text' 
                        name='text' 
                        onChange={this.onChange} 
                        value={text} 
                        placeholder='ARTICLE CONTENT'/>
                    <div className='cna-footer'>
                        <Link to='/' className='cna-save'onClick={this.pushToFirebase}>
                            Save
                        </Link>
                        <Link to='/' className='cna-save'>
                            Cancel
                        </Link> 
                    </div>
                </form>
            </div>
        );
    }
};

export default CreateNewArticle;