const API_URL = 'https://localhost:7189/api/Todos'

export async function getTodos() {
    try {
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error('API request failed:', error)
        throw error
    }
}

export async function createTodo(todo) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    return await response.json()
}

export async function updateTodo(id, todo) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    return {
        ...todo,
        id: id
    }
}

export async function deleteTodo(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }
}