import axios from 'axios'

const BASE_URL: string =
  'https://order-foodst-1-default-rtdb.firebaseio.com'

type HeadersType = { [key: string]: string }

const headers: HeadersType = { 'Content-Type': 'application/json' }

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: headers,
})
