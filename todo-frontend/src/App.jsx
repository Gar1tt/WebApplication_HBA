import { useEffect, useState } from 'react'
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/todoService'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
            .then(data => setTodos(data))
            .catch(error => console.error(error))
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
        <div>

            <h1>Todo App</h1>

            <TodoForm onTodoCreated={handleTodoCreated} />

            <TodoList
                todos={todos}
                onTodoUpdated={handleTodoUpdated}
                onTodoDeleted={handleTodoDeleted}
            />
        </div>
    )
}

export default App
