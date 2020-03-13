import axios from 'axios'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASEURL
})
request.interceptors.request.use(
  config => {
    return config
  },
  Promise.reject
)
request.interceptors.response.use(
  response => {
    return response.data
  },
  Promise.reject
  )

export default request
