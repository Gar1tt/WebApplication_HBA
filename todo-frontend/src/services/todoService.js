const API_URL = 'https://localhost:7189/api/Todos';

export async function getTodos() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok)
        {
            throw new Error(`HTTP error: ${ response.status }`);
        }

        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}