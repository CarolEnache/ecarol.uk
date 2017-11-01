import React, { Component } from 'react';





class CreateNewArticle extends Component{
    
    constructor(props){
        super(props);
        this.state = {item: [], text: ''};
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }

    render(){
        return(
            <div>
                <form>
                    <input onChange={this.handleChange} value={this.state.text}/>
                </form>
            
            </div>
        )
    }
}

export default CreateNewArticle;