import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 10000
axios.defaults.baseURL = window.global_config.BASE_URL + '/ppu/web'
axios.defaults.withCredentials = true

// http request 请求拦截器
axios.interceptors.request.use(
  config => {
    // if (config.method === 'post') {
    //   config.header = { 'Content-Type': 'application/x-www-form-urlencoded' }
    //   config.transformRequest = [function(data) { // 对传递的数据进行格式转换，以便传递给后台
    //     data = qs.stringify(data)
    //     return data
    //   }]
    // }  
    // const token = sessionStorage.token
    // console.log(token);
    
    // if (!token) {
    //   console.log(router);
      
    //   this.$router.push({path: '/'})
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    let result = ''
    if (error.response) {
      const code = error.response.status
      if (code === 403) {
        result = '登录失效，请重新登录'
        sessionStorage.clear()
        window.location.href = '/login'
      } else if (code === 404) {
        result = '请求的页面失踪了~'
      }
    } else {
      result = error + ''
    }
    alert(result)
    return Promise.reject(result)
  }
)

/**
 * 封装get请求
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      console.log(response);
      
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns { Promise }
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      transformRequest: [function(data) { // 对传递的数据进行格式转换，以便传递给后台
        data = qs.stringify(data)
        return data
      }]
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}