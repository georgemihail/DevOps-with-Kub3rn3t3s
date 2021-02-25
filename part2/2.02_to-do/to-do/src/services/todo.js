import axios from 'axios'
const baseUrl = 'http://localhost:8081/todos'

const getTodos = async () => {
    const response = await axios(baseUrl)
    return response.data
}

const addTodo = async (newTodo) => {
    const response = await axios.post(baseUrl, newTodo)
    return response.data
}

const changeDone = async (id) => {
    const response = await axios.post(`${baseUrl}/${id}`)
    return response.data
}

const todosService = {
    getTodos,
    addTodo,
    changeDone
}

export default todosService