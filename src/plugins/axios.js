import axios from 'axios'

const $axios = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

$axios.interceptors.response.use(
	(response) => response.data,
	(error) => {
		return Promise.reject(error)
	}
)

export default $axios
