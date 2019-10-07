// 引入封装好的axios
import axios from '@/utils/myaxios.js'
// 实现登录验证
export const login = (data) => {
  // axios() 返回的是一个promise对象
  return axios({
    // 设置请求的方式
    method: "post",
    // 请求的路径
    url: "login",
    // 传递的数据，如果 get方式就需要使用params,如果是post方式就需要使用data
    data
  })
}