import request from '../request'

const API = {
  test(){
    return request.get('/test')
  }
}
export default API
