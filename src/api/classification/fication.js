import axios from 'axios';

export const ficationList = () =>{
    return  axios({
         method:'get',
         url:' http://localhost:3000/ficationList'
     })
 }
 export const ficationNav = () =>{
    return  axios({
         method:'get',
         url:' http://localhost:3000/ficationNav'
     })
 }