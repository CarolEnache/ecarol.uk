import React, { Component } from 'react';
import { database } from '../firebase';

class CreateNewArticle extends Component{
    
    constructor(props){
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.pushToFirebase = this.pushToFirebase.bind(this);
    };

    handleChange(e) {
        e.preventDefault();
        this.setState({ text: e.target.value })
    };
    componentWillMount = () => {
        this.firebaseRef = database.ref('/articles');
    };
    
    pushToFirebase(event){
        event.preventDefault();
        this.firebaseRef.push({text: this.state.text});
        this.setState({text: ''})
    };

    
    render(){
        return(
            <div className='CreateNewArticle'>
                <form >
                    <input onChange={this.handleChange} value={this.state.text}/>
                    <button onClick={this.pushToFirebase}>
                        ADD
                    </button>
                </form>
            </div>
        );
    }
};

export default CreateNewArticle;