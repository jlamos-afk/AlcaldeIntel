import { defineStore } from 'pinia'
import axios from 'axios'

const tokenFromStorage = localStorage.getItem('token')
if (tokenFromStorage) {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenFromStorage}`
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: tokenFromStorage,
    user: null
  }),
  actions: {
    async login(credentials) {
      const { data } = await axios.post('/auth/login', credentials)
      this.token = data.token
      localStorage.setItem('token', data.token)
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
    },
    async register(payload) {
      await axios.post('/auth/register', payload)
    },
    async fetchUser() {
      if (!this.token) return
      const { data } = await axios.get('/users/me')
      this.user = data
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      delete axios.defaults.headers.common.Authorization
    }
  }
})
