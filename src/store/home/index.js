// import axios from "axios";
import Json from 'api/json/home.js'
const actions ={
   async getActionhomeNav({commit}){
        // let dat = await axios({
        //     method: "get",
        //     url: "http://localhost:3000/homenav"
        //   });
        let dat = Json.homenav;
          commit("getMutationhomeNav",dat);
    },
    async getClassList({commit}){
        // let imglis = await axios({
        //     method:'get',
        //     url:' http://localhost:3000/kingKongModule'
        // });
        let imglis = Json.kingKongModule;
        commit('getMutationimgList',imglis);
    },
}
const mutations = {
    getMutationhomeNav(state,params){
        state.homeNav = params;
        state.homeNav.unshift("推荐");
    },
    getMutationimgList(state,params){
        var arr = [];
        params.kingKongList.forEach(item=>{
            var obj = {};
            obj.picUrl = item.picUrl;
            obj.text = item.text;
            arr.push(obj);
        })
        state.classList = arr;
    }
}
const state = {
    homeNav:[],
    classList:[]
}
const getters = {

}
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced:true
}