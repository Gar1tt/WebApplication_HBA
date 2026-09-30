function TodoItem({ todo }) {
    return (
        <div className = "todo-item">
            <h3>{ todo.title}</ h3 >

            {
        todo.description && (
                <p>{ todo.description}</p>
            )}

            <small>
                { todo.isCompleted ? 'Completed' : 'Not completed'}
            </small>

            <small>
                Created: {new Date (todo.createdAt).toLocaleDateString('de-De')}
            </small>
        </div>
    )
}

export default TodoItem