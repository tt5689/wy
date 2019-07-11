
import axios from 'axios';

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
// 列表
export const ficationList= ()=>{
    return axios({
        method:'get',
        url:'http://localhost:3000/ficationList'
    })
} 
// 内容
export const ficationNav= ()=>{
    return axios({
        method:'get',
        url:'http://localhost:3000/ficationNav'
    })
} 
// 图片
export const recommend= ()=>{
    return axios({
        method:'get',
        url:'http://localhost:3000/recommend'
    })
}