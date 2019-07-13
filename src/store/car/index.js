// import axios from "axios";
import Json from 'api/json/home.js'
 const state ={
    goodsList:[],
    selecetedAll:true,
    deleSle:true,
}
 const actions ={
    getActionGoods({commit}){
        var good = [];
            // axios({
            //     method:"get",
            //     url:"http://localhost:3000/popularItemList"
            // }).then((data)=>{
                var data = Json.popularItemList;
                // 这里要从本地存储中读取数据
                var idarr = JSON.parse(localStorage.getItem('idArr'));
                if(idarr){
                    for(var j =0;j<idarr.length;j++){
                    for(var i =0;i<data.length;i++){
                        if(idarr[j] == data[i].id){
                            good.push(data[i]);
                        }
                    }
                }
                commit("getMutationGoods",good)
                }
                
            // })
        
        
    }
}

function handerChangeLOcalsto(index,num,fla,id){
    var arr = JSON.parse(localStorage.getItem('goodList'));
    if(num){
        arr[index].num = num;
    }
    if(fla){
        arr.splice(index,1);
        var idarr = JSON.parse(localStorage.getItem('idArr'));
        for(var i =0;i<idarr.length;i++){
            if(idarr[i] == id){
                idarr.splice(i,1);
               
            }
        } 
        localStorage.setItem('idArr',JSON.stringify(idarr));
    }
    state.goodsList = arr;
    localStorage.setItem('goodList',JSON.stringify(arr));
}
 const mutations = {
    getMutationGoods(state,params){
        var arr = JSON.parse(localStorage.getItem('goodList'));
        for(var i=0;i<params.length;i++){
            var ff= true;
            if(arr){
                for(var j =0;j<arr.length;j++){
                    if(arr[j].id == params[i].id){
                        ff =false;
                        params[i].num = arr[j].num;
                        params[i].flag = arr[j].flag;
                    }
               }
            }
            if(ff){
                params[i].num = 1;
                params[i].flag  = true;
            }
        }
        localStorage.setItem('goodList',JSON.stringify(params));
        state.goodsList = params;
       state.selecetedAll = true;
       state.deleSle = true;
    },
    //商品列表点击选中或者取消事件
    handerChangeToggle(state,params){
        state.goodsList[params].flag = !state.goodsList[params].flag;
        var temp = true;
        state.goodsList.forEach(element => {
            //判断是有没有选中的
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
            handerChangeLOcalsto(index,state.goodsList[index].num);
        }
    },
    handlerAdd(state,index){
        state.goodsList[index].num ++;
        handerChangeLOcalsto(index,state.goodsList[index].num);
    },
    //键盘输入商品执行的事件
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
        //当按钮从下单变为删除的时候执行的事件
        if(!state.deleSle){
            console.log('ddddd');
            state.goodsList.forEach((item,index)=>{
                if(item.flag){
                    state.goodsList.splice(index,1)
                    handerChangeLOcalsto(index,0,true,item.id);
                }
            })
        }
        if(state.goodsList.length == 0){
            state.deleSle = true;
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
