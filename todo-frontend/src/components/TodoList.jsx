import TodoItem from './TodoItem'

function TodoList({ todos }) {
    return (
        <div classname="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList