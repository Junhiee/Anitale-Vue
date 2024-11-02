import axios from "axios";

const httpx = axios.create({
    baseURL: 'http://localhost:8001/v1',
    timeout: 5000, // 超时时间
    headers: { 'Content-Type': 'application/json' },
});

// 请求拦截器
httpx.interceptors.request.use(
    (config) => {
        // 可以在这里添加 token 等请求头
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 响应拦截器
httpx.interceptors.response.use(
    (response) => response,
    (error) => {
        // 统一处理错误
        if (error.response && error.response.status === 401) {
            // 处理未授权错误
            console.error('Unauthorized');
        }
        return Promise.reject(error);
    }
);

export default httpx;
