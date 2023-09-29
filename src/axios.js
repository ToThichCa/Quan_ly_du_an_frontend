import axios from 'axios';
const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});

    instance.interceptors.response.use(
        (response) => {
    //         // Thrown error for request with OK status code
            const { data } = response;
    //         if (data.hasOwnProperty('s') && !isSuccessStatusCode(data['s']) && data.hasOwnProperty('errmsg')) {
            return response.data;
            }

    );

export default instance;
