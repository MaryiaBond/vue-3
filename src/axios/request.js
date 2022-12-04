import axios from 'axios'

export const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_URL
})