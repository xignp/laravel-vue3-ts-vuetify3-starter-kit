import axios from 'axios'

const api = axios.create({
  baseURL: process.env.MIX_API_BASE_URL,
  // withCredentials: true,
})

export default api
