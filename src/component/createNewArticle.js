import React, { Component } from 'react';
import { database } from '../firebase';

class CreateNewArticle extends Component{
    
    constructor(props){
        super(props);
        this.state = {articles: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.pushToFirebase = this.pushToFirebase.bind(this);
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
                <form >
                    <input onChange={this.handleChange} value={this.state.text}/>
                    <button onClick={this.pushToFirebase}>
                        ADD
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

}

export default CreateNewArticle;