import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputToDo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleChange = id => {
    this.setState( prevState => ({
        
            todos: prevState.todos.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                    
                }
                return todo;
            }),
        }
    ))
    }
    
    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    addToDoItem = title => {
        const newToDo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newToDo]
        })
    }

    render() { 
        return (
            <div>
                <Header />
                <InputToDo addToDoProps = {this.addToDoItem}/>
                {<TodosList todos = {this.state.todos} handleChangeProps = {this.handleChange}
                deleteTodoProps = {this.delTodo}
                />}
            </div>
        );
    }
}

export default TodoContainer;