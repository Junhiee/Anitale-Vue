import axios from "axios";
import httpx from "./request";

// 导出一个注册接口请求的函数，传入一个data参数
export const registerUser = (data) => {
  return httpx.post('/user/register', data)
}

export const loginUser = (data) => {
  return httpx.post('/user/login', data)
}
