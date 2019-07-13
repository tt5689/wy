<template>
     <div class="newUserExclusive">
            <div class="newExheader">
                - 新人爆款专享价 -
            </div>
            <div class="relativeGood"  v-for="(item1,index1) in exclusiveMList" :key="index1" >
                <div class="foolrtile" :style="'background:url('+item1.bannerUrl+') no-repeat;background-size:cover;'">
                    <div class="line1">{{item1.title}}</div>
                    <div class="line2">{{item1.subTitle}}</div>
                </div>
                <div class="itemList">
                    <div class="oneitem" v-for="(item,index) in item1.itemList" :key="index">
                        <a href="#">
                            <img :src="item.scenePicUrl"/>
                            <div class="line1">{{item.name}}</div>
                            <div class="line2">￥{{item.retailPrice}}</div>
                            <div class="line3">￥{{item.counterPrice}}</div>
                        </a>
                        <i class="iconfont icongouwuche cart"></i>
                    </div>
                </div>
            </div>

        </div>
</template>

<script>
// import {exclusiveList} from 'api/newPerson'
import Json from 'api/json/home.js'
export default {
     data() {
        return {
            exclusiveMList:[]
        }
    },
     async created(){
        // let da = await exclusiveList();
        let da= Json.newUserExclusiveModule;
        this.exclusiveMList = da;
    },
}
</script>
<style lang="scss" scoped>
.newExheader{
    padding: .68rem 0 .4rem;
    text-align: center;
    font-weight: 700;
    font-size: .34rem;
    color: #333;
    line-height: .6rem;
}
.relativeGood{
    padding: 0 .3rem;
}
.foolrtile{
    padding: .35rem 0 .35rem .3rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: .10667rem;
    background-size: 100%;
    background-repeat: no-repeat;
}
.line1{
    font-weight: 700;
    font-size: .3rem;
    color: #333;
    line-height: .4rem;
}
.line2{
    margin-top: .02rem;
    font-size: .24rem;
    color: #7f7f7f;
    line-height: .32rem;
}
.itemList{
    margin: .12rem 0 .32rem;
    border-left: .01rem solid #d9d9d9;
    border-top: .01rem solid #d9d9d9;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
.oneitem{
    position: relative;
    display: inline-block;
    width: 50%;
    height: 5.27rem;
    border-right: .01rem solid #d9d9d9;
    border-bottom: .01rem solid #d9d9d9;
    box-sizing: border-box;
    overflow: hidden;
}
.oneitem a{
    display: block;
    width: 100%;
    
}
.oneitem a img{
    width: 100%;
    height: 3.45rem;
}
.oneitem a .line1{
    overflow: hidden;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: .27rem .20rem 0;
    font-size: .28rem;
    color: #333;
    line-height: .4rem;
}
.oneitem a .line2{
    margin: .04rem 0 0 .20rem;
    height: .48rem;
    color: #B4282D;
}
.oneitem a .line3{
    margin: -.05rem 0 0 .2rem;
    font-size: .26rem;
    color: #999;
    line-height: .36rem;
    text-decoration: line-through;
}
.oneitem  .cart{
    position: absolute;
    display: inline-block;
    right: .2rem;
    bottom: .3rem;
    width: .6rem;
    height: .6rem;
    border: .01rem solid #7f7f7f;
    border-radius: .3rem;
    font-size: .3rem;
    line-height: .6rem;
    text-align: center;
    color: #999;
}
</style>