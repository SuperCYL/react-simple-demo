import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.100.100:9900/',
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar' }
});

//请求拦截处理
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export const post = async (api, params) => {
    return new Promise((resolve, reject) => {
        instance.post(api, params)
            .then(res => {
                console.log('11111',res.data);
                resolve(res.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}
export const get = async (api, params) => {
    return new Promise((resolve, reject) => {
        instance.get(api, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}