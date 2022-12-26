import React, {Component} from 'react';

class InputToDo extends Component {
    state = {
        title: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
            })

    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()) {
            this.props.addToDoProps(this.state.title)
            this.setState({
                title:''
            })
        } else {
            alert('please write an item')
        }
        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Add to do...' 
                value={this.state.title}
                name = 'title'
                onChange = {this.onChange}/>
                <button>Submit</button>
            </form>
        )
    }
}
export default InputToDo;
