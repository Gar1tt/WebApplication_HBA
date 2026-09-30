import { useEffect, useState } from 'react'
import { getTodos } from './services/todoService'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getTodos()
            .then(data => setTodos(data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (

        <div>

            <h1>Todo App</h1>

            {todos.length === 0 ? (
                <p>No todos yet.</p>
            ) : (
                todos.map(todo => (
                    <p key={todo.id}>
                        {todo.title}
                    </p>
                ))
            )}
        </div>
    )
}

export default App
