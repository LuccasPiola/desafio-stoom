import axios from 'axios'

const api = axios.create({
  baseURL: 'https://desafio-stoom-backend.herokuapp.com',
})

export default api
