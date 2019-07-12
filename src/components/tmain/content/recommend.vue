<template>
    <div class="recommend_wrap">
        <CommHead :val="title"/>
        <div class="recom_top">
            <a href="#">
                <img :src="topI.showPicUrl"/>
                <div class="good_tip">
                    <p v-for="(limi,index1) in topI.itemTagList" :key="index1">{{limi.name}}</p>
                    <h3>{{topI.name}}</h3>
                    <span>{{topI.simpleDesc}}</span><br/>
                    <strong>{{topI.retailPrice}}</strong>
                </div>
            </a>
        </div>
        <TGoodList :popList="data"/>
    </div>
</template>

<script>
import CommHead from './commHead.vue'
import TGoodList from './tgoodList.vue'
// import {popularItemList} from 'api/home/thome.js'
import Json from 'api/json/home.js'
export default {
     components:{
        CommHead,
        TGoodList
    },
    async mounted() {
    //   let d =  await popularItemList();
       let d = Json.popularItemList;
      var i =1;
      d.forEach(element => {
         var obj = {};
        obj.itemTagList= element.itemTagList;
        obj.name = element.name;
        obj.simpleDesc = element.simpleDesc;
        obj.retailPrice= '￥'+element.retailPrice;
        obj.showPicUrl = element.showPicUrl;
        if(i==1){
            this.topI = obj;
            i++;
        }else{
            this.data.push(element);
        }
      });
    },
    data() {
        return {
            title:'人气推荐',
            data:[],
            topI:{}
        }
    },
}
</script>

<style lang="scss" scoped>
.recommend_wrap{
    min-height: 7.84rem;
    background: #fff;
    margin-bottom: .2rem;
    padding: 0 .3rem;
    .recom_top{
        height: 2.8rem;
        background: #fef0df;
        a{
            display: block;
            width: 100%;
            height: 100%;
            img{
                width: 33.33%;
                height: 100%;
            }
            .good_tip{
                float: right;
                width: 66.67%;
                height: 100%;
                padding: .6rem 0 0 .3rem;
                box-sizing: border-box;
                p{
                    // width: 1.02rem;
                    padding: 0 .1rem;
                    display: inline-block;
                    margin-left: .04rem;
                    height: .3rem;
                    color: #b4282d;
                    font-size: .18rem;
                    border: 1px solid #b4282d;
                    zoom: .5;
                    border-radius: .04rem;
                    text-align: center;
                    line-height: .3rem;
                }
                h3{
                    width: 3.36rem;
                    font-size: .28rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: .48rem;
                }
                span{
                    color: #7f7f7f;
                    font-size: .24rem;
                }
                strong{
                    color: #b4282d;
                    font-size: .24rem;
                }
            }
        }
    }
    
}
</style>

