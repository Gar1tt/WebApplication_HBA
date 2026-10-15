import { useEffect, useState } from 'react'
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/todoService'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        getTodos()
            .then(data => setTodos(data))
            .catch(error => {
                console.error(error)
                setError('Failed to load Todos')
            })
            .finally(() => setLoading(false))
    }, [])

    async function handleTodoCreated(todo) {
        const createdTodo = await createTodo(todo)

        setTodos(currentTodos => [
            ...currentTodos,
            createdTodo
        ])
    }

    async function handleTodoUpdated(id, todo) {
        const updatedTodo = await updateTodo(id, todo)

        setTodos(currentTodos => 
            currentTodos.map(currentTodo =>
                currentTodo.id === id ? updatedTodo : currentTodo
            )
        )
    }

    async function handleTodoDeleted(id) {
        await deleteTodo(id)

        setTodos(currentTodos =>
            currentTodos.filter(todo => todo.id !== id)
        )
    }

    return (
        <main className="app-container">
            <header className="app-header">
                <div>
                    <p className="eyebrow">Your personal workspace</p>
                    <h1>My Tasks<span>.</span></h1>
                    <p className="subtitle">
                        A little progress every day adds up.
                    </p>
                </div>

                <div className="task-counter">
                    <span className="counter-number">{todos.length}</span>
                    <span className="counter-label">Total tasks</span>
                </div>
            </header>

            <section className="form-section">
                <h2>Add a new task</h2>
                <TodoForm onTodoCreated={handleTodoCreated} />
            </section>
            <section className="tasks-section">
                <div className="section-heading">
                    <h2>Your tasks</h2>
                    <span className="task-count">{todos.length} total</span>
                </div>

                {loading && <p className="status-message">Loading tasks...</p>}
                {error && <p className="error-message">{error}</p>}

                {!loading && !error && todos.length === 0 &&
                    (<div className="empty-state">
                        <div className="empty-icon">✓</div>
                        <h3>All clear!</h3>
                        <p>You don't have any tasks yet. Add one above to get started.</p>
                    </div>
                    )}

                {!loading && !error &&
                    (<TodoList
                        todos={todos}
                        onTodoUpdated={handleTodoUpdated}
                        onTodoDeleted={handleTodoDeleted}
                    />)}
            </section>

            <footer className="app-footer">
                Built with React, ASP.NET Core & SQL Server by Gar1tt
            </footer>
        </main>
    )
}

export default App
