// import axios from 'axios'

// import { BASE_URL, TIMEOUT } from './config'

// class Request {
//   constructor(baseURL, timeout = 10000) {
//     this.instance = axios.create({
//       baseURL,
//       timeout,
//     })
//   }
//   request(config) {
//     return new Promise((resolve, reject) => {
//       this.instance
//         .request(config)
//         .then((res) => {
//           console.log(
//             '🚀 ~ file: index.js ~ line 17 ~ Request ~ .then ~ res',
//             res.data
//           )
//           console.log(
//             '🚀 ~ file: index.js ~ line 22 ~ Request ~ .then ~  resolve(res.data)',
//             resolve(res.data)
//           )
//           resolve(res.data)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   }

//   get(config) {
//     return this.request({ ...config, method: 'get' })
//   }

//   post(config) {
//     return this.request({ ...config, method: 'post' })
//   }
// }

// export default new Request(BASE_URL, TIMEOUT)
import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

class Request {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new Request(BASE_URL, TIMEOUT)
