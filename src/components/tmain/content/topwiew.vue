<template>
    <div class="topwiew_wrap">
        <CommHead :val="title"/>
        <div class="tagList">
            <a href="javascript:;" v-for='(item,index) in infos' :key="index" 
            :style="'background:url('+item.picUrl+') no-repeat;background-size: 100% 100%;'">
                <h4>{{item.name}}</h4>
                <p>{{item.floorPrice}}</p>
            </a>
        </div>
    </div>
</template>

<script>
import CommHead from './commHead.vue'
// import {tagList} from 'api/home/thome.js'
import Json from 'api/json/home.js'
export default {
    components:{
        CommHead
    },
    async mounted() {
        //  let data = await tagList();
        let data = Json.tagList;
         data.map((item)=>{
            var obj = {}
            obj.name = item.name;
            obj.picUrl= item.picUrl;
            obj.floorPrice = item.floorPrice +'元起';
            this.infos.push(obj);
         })
    },
    data() {
        return {
            title:'品牌制造商只供',
            infos:[]
        }
    },
}
</script>

<style lang="scss" scoped>
    .topwiew_wrap{
        min-height: 6.56rem;
        background: #fff;
        margin-bottom: .2rem;
        padding:  0 .3rem;
       
        .tagList{
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: space-between;
            a{
                display: block;
                width: 3.42rem;
                height: 2.6rem;
                border-radius: .04rem;
                margin-top: .04rem;
                h4{
                    text-align: center;
                    padding-top: .2rem;
                    font-size: .26rem;
                }
                p{
                    font-size: .24rem;
                    color: #7f7f7f;
                    text-align: center;
                }
            }
        }
    }
</style>