<template>
  <div class="popularItems">
    <h2>24小时热销商品</h2>
    <div class="ppItemList">
      <div class="pitem" v-for="(item,index) in popList" :key="index">
        <img :src="item.scenePicUrl"/>
        <div class="pline1">{{item.name}}</div>
        <div class="pline2">￥{{item.couponPrice}}</div>
      </div>
  </div>
</div>
</template>
<script>
// import {popuItem} from 'api/newPerson'
import Json from 'api/json/home.js'
export default {
    data() {
        return {
            popList:[]
        }
    },
    async created() {
        // let dat = await popuItem();
        let dat = Json.popularItems;
        this.popList = dat;
    },
};
</script>
<style lang="scss" scoped>
.popularItems{
    padding: 0 .3rem .20rem;
    margin-bottom: .20rem;
    background: #fff;
}
.popularItems h2{
    width: 100%;
    height: 1.2rem;
    background: #fff;
    font-size: .34rem;
    font-weight: 700;
    line-height: 1.2rem;
    text-align: center;
}
.popularItems .item:nth-child(2n+1) {
    margin-right: .2rem;
}
.ppItemList{
    width: 100%;
}
.popularItems .pitem {
    display: inline-block;
    width: 48%;
}
.popularItems .pitem img{
    width: 100%;
    height: 3.35rem;
    background-color: #f4f4f4;
    border-radius: .05333rem;
}
.popularItems .pitem .pline1{
    margin-top: .16rem;
    font-size: .28rem;
    line-height: .4rem;
    color: #333;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.popularItems .pitem .pline2{
    margin-bottom: .1rem;
    height: .48rem;
    line-height: .48rem;
    color: red;
}
</style>