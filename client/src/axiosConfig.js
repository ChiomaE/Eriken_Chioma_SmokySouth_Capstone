import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV != 'production' ? 'http://http://localhost:5173' : '/'