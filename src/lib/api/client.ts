import axios from 'axios'

const API_BASE_URL =
  import.meta.env.DEV
    ? '/api'
    : 'https://case.nodelabs.dev/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth-storage')
    if (token) {
      try {
        const parsed = JSON.parse(token)
        if (parsed.state?.token) {
          config.headers.Authorization = `Bearer ${parsed.state.token}`
        }
      } catch (e) {
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const currentPath = window.location.pathname
      const isAuthPage = currentPath === '/sign-in' || currentPath === '/sign-up'
      
      localStorage.removeItem('auth-storage')
      
      if (!isAuthPage) {
        window.location.href = '/sign-in'
      }
    }
    return Promise.reject(error)
  }
)

