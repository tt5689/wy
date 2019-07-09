import axios from 'axios';
import http from "utils/http.js"
//获取新人专享数据
export const exclusiveList = () =>{
   return  axios({
        method:'get',
        url:'http://localhost:3000/newUserExclusiveModule'
    })
}
export const popuItem = () =>{
    return  axios({
        method:'get',
        url:'http://localhost:3000/popularItems'
    })
}
export const startPop = () =>{
    return  axios({
        method:'get',
        url:'http://localhost:3000/starReputationModule'
    })
}
export const appsaleItem = () =>{
    return  axios({
        method:'get',
        url:' http://localhost:3000/appSaleItems'
    })
}
export const pinList = () =>{
    return  axios({
        method:'get',
        url:'http://localhost:3000/pinModuleList'
    })
}