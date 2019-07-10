import axios from "axios";
 const state ={
    goodsList:[],
    selecetedAll:true,
    deleSle:true,
}
 const actions ={
    getActionGoods({commit}){
        
        axios({
            method:"get",
            url:"http://localhost:3000/popularItemList"
        }).then((data)=>{
            // 这里要从本地存储中读取数据
            console.log(data.data)
            commit("getMutationGoods",data.data)
        })
    }
}
 const mutations = {
    getMutationGoods(state,params){
        params.map((item)=>{
            item.flag=true;
            item.num = 1;
        })
        state.goodsList = params;
    },
    handerChangeToggle(state,params){
        state.goodsList[params].flag = !state.goodsList[params].flag;
        var temp = true;
        state.goodsList.forEach(element => {
            if(!element.flag){
                temp = false;
            }
        });
        state.selecetedAll = temp;
    },
    //全选反选
    handlerToggle(){
        state.selecetedAll = !state.selecetedAll;
        state.goodsList.forEach(item=>{
            item.flag = state.selecetedAll;
        })
    },
    handlerReduce(state,index){
        if(state.goodsList[index].num>1){
            state.goodsList[index].num --;
        }
    },
    handlerAdd(state,index){
        state.goodsList[index].num ++;
    },
    handlerInput(state,es){
        state.goodsList[es.index].num = es.e.target.value;
    },
    //点击编辑键执行的东西
    handlerEdit(state){
        state.selecetedAll = false;
        state.goodsList.forEach(item=>{
            item.flag = state.selecetedAll;
        })
        
        state.deleSle = !state.deleSle;
    },
    // 点击删除出现的东西
    handerDelete(state){
        if(!state.deleSle){
            state.goodsList.forEach((item,index)=>{
                if(item.flag){
                    state.goodsList.splice(index,1)
                }
            })
            //还需要删除缓存里面的数据
        }
        
    }
 }

const getters = {
    goodsInfor(state){
        let sumPrice = 0;
        let selectN = 0;
        state.goodsList.map(item=>{
            if(item.flag){
                selectN += item.num;
                sumPrice += item.num * item.retailPrice;
            }
            
        })
        return {sumPrice,selectN}
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}
