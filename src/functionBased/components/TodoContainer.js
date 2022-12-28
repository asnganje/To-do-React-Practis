import React, {useState, useEffect} from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputToDo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos());


    const handleChange = id => {
    setTodos( prevState =>
            prevState.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                    
                }
                return todo;
            })
        )
    }
    
    const delTodo = id => {
        setTodos([todos.filter(todo => {
                    return todo.id !== id;
                }),
            ])
    }

    const addToDoItem = title => {
        const newToDo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newToDo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.title = updatedTitle
            }
            return todo
        })
    )   
    }

        function getInitialTodos() {
            const temp = localStorage.getItem('todos')
            const savedTodos = JSON.parse(temp)
            return savedTodos || []
        }

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem('todos', temp)
    })


        return (
            <div className="container">
            <div className="inner">
                <Header />
                <InputToDo addToDoProps = {addToDoItem}/>
                {<TodosList todos = {todos} 
                handleChangeProps = {handleChange}
                deleteTodoProps = {delTodo}
                setUpdateProps = {setUpdate}
                />}
            </div>
            </div>
        );
    }

export default TodoContainer;