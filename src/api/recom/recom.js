import axios from 'axios';

export const ficationList = () =>{
    return  axios({
         method:'get',
         url:'http://localhost:3000/recommend'
     })
 }