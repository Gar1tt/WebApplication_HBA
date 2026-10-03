import { useState } from 'react'

function TodoItem({ todo, onTodoUpdated, onTodoDeleted }) {
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description ?? '')

    async function handleSave() {
        const updatedTodo = {
            title,
            description,
            isCompleted: todo.isCompleted
        }

        try {
            await onTodoUpdated(todo.id, updatedTodo)
            setIsEditing(false)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleToggleComplete() {
        const updatedTodo = {
            title: todo.title,
            description: todo.description,
            isCompleted: !todo.isCompleted
        }

        try {
            await onTodoUpdated(todo.id, updatedTodo)
        } catch (error) {
            console.error(error)
        }
    }

    if (isEditing) {
        return (
            <div className="todo-item">
                <input
                    type="text"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="text"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />

                <button onClick={handleSave}>
                    Save
                </button>

                <button onClick={() => setIsEditing(false)}>
                    Cancel
                </button>

            </div>
        )
    }

    return (
        <div className = "todo-item">
            <h3>{todo.title}</ h3 >

            {
        todo.description && (
                <p>{todo.description}</p>
            )}

            <small>
                { todo.isCompleted ? 'Completed' : 'Not completed'}
            </small>

            <small>
                Created: {new Date (todo.createdAt).toLocaleDateString('de-De')}
            </small>

            <button onClick={handleToggleComplete}>
                {todo.isCompleted ? 'Uncomplete' : 'Complete'}
            </button>

            <button onClick={() => setIsEditing(true)}>
                Edit
            </button>

            <button onClick={() => onTodoDeleted(todo.id)}>
                Delete
            </button>
        </div>
    )
}

export default TodoItem