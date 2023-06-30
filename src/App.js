import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TableRow from './component/TableRow'
import {v4 as uuidv4} from 'uuid'
import AddTodo from './component/AddTodo'
import './App.css'


function App() {
const [todos, setTodos] = useState([])
const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
}

const onEdit = (id, newTodo) => {
    const updatedData = todos.map((todo) => 
        todo.id === id ? {...todo, ...newTodo}: todo
    )

    setTodos(updatedData)
}

const onAdd = (data) => {
    const newTodo = {
        id: uuidv4(),
        title: data,
        completed: false,
    }

    setTodos([...todos, newTodo])
}

useEffect(() => {
    const fetchData = async() =>{
        // using fetch api
        // try{
        //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        //     const data = await response.json()
        //     setTodos(data)
        // }catch(error){
        //     console.log('error fetching..', error)
        // }

        // using axios
        try {   
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            setTodos(response.data)
        }catch(error){
            console.log('error fetching..', error)
        }
    }

    fetchData()
},[])

  return (
    <div className="todo-container">
        <h1><span>TODO APP | </span>CRUD</h1>
        <AddTodo 
            onAdd={onAdd}
        />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo, i) => (
                        <TableRow
                            index={i}
                            todo={todo}
                            key={todo.id}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default App