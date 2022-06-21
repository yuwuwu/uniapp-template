/*
 * @Author: yuyongxing
 * @Date: 2022-06-17 14:15:13
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-06-17 14:26:35
 * @Description: 
 */
import http from '../utils/http'

export const testApi = (params)=>{
   return http('/api/test',"post",params)
}