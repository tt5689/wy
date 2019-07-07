import axios from "axios";
const actions ={
   async getActionhomeNav({commit}){
        let dat = await axios({
            method: "get",
            url: "http://localhost:3000/homenav"
          });
          commit("getMutationhomeNav",dat.data);
    },
    async getClassList({commit}){
        let imglis = await axios({
            method:'get',
            url:' http://localhost:3000/kingKongModule'
        });
        commit('getMutationimgList',imglis.data);
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