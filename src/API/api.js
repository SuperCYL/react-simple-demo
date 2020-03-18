import {post,get} from './request';

//登录接口非加密(用于开发环境和测试环境)
export function notJmlogin(params) {
    return post('/api-uaa/oauth/user/token', params).then(res => res.data)
}


