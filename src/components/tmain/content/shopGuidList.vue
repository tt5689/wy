<template>
    <div class="newItemModule">
        <CommHead :val="title"/>
        <TGoodList :newList="axiosGetList"/>
    </div>
</template>

<script>
import CommHead from './commHead.vue'
import TGoodList from './tgoodList.vue'
// import {newItemList} from 'api/home/thome.js'
import Json from 'api/json/home.js'
export default {
     components:{
        CommHead,
        TGoodList
    },
    data() {
        return {
            title:'新品首发',
            axiosGetList:[]
        }
    },
    async mounted() {
        // let dt = await newItemList();
        let dt = Json.newItemList;
        dt.forEach(element => {
            var obj = {};
            obj.itemTagList= element.itemTagList;
            obj.name = element.name;
            obj.simpleDesc = element.simpleDesc;
            obj.retailPrice= '￥'+element.retailPrice;
            obj.showPicUrl = element.showPicUrl;
            this.axiosGetList.push(obj);
        });
    },
}
</script>

<style lang="scss" scoped>
    .newItemModule{
        min-height: 8.38rem;
        background: #fff;
        padding: 0 .3rem;
        margin-bottom: .2rem;
    }
</style>