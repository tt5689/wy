import http from "utils/http.js";
import axios from 'axios';
// const homeDat =  ()=>http("get","http://localhost:3000/goods")

//获取新人专享数据
export const newPImg = () =>{
   return  axios({
        method:'get',
        url:' http://localhost:3000/indexActivityModule'
    })
}
export const tagList = () =>{
    return axios({
        method:'get',
        url:' http://localhost:3000/tagList'
    })
}
export const categoryHotSellModule = () =>{
    return axios({
        method:'get',
        url:'http://localhost:3000/categoryHotSellModule'
    })
}
export const popularItemList = () =>{
    return axios({
        method:'get',
        url:'http://localhost:3000/popularItemList'
    })
}
export const flashSaleModule = ()=>{
    return axios({
        method:'get',
        url:'http://localhost:3000/flashSaleModule'
    })
}
export const newItemList = ()=>{
    return axios({
        method:'get',
        url:'http://localhost:3000/newItemList'
    })
} 
export const sceneLightShoppingGuideModule = ()=>{
    return axios({
        method:'get',
        url:'http://localhost:3000/sceneLightShoppingGuideModule'
    })
}
export const categoryModule = ()=>{
    return axios({
        method:'get',
        url:'http://localhost:3000/categoryModule'
    })
} 
