import { useState } from 'react'

function TodoForm({ onTodoCreated }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const newTodo = {
            title,
            description
        }

        try {
            await onTodoCreated(newTodo)

            setTitle('')
            setDescription('')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Todo title"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />

            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm