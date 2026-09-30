import { useEffect, useState } from 'react'
import { getTodos } from './services/todoService'
import './App.css'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
            .then(data => setTodos(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>

            <h1>Todo App</h1>

            <TodoList todos={todos} />
        </div>
    )
}

export default App
