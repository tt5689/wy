<template>
    <div class="starReputationModule">
            <h2>明星口碑商品</h2>
            <div class="starList">
                <div class="oneItem" v-for="(item,index) in starP" :key="index">
                    <div v-if="(index%2) != 0" class="item2">
                    <div class="imgWrap">
                        <a href="javascript:;">
                            <img :src="item.listPicUrl"/>
                        </a>
                    </div>
                    <div class="infoWrap">
                        <div class="num">{{index+1}}</div>
                        <div class="line1">{{item.name}}</div>
                        <div class="line2">{{item.simpleDesc}}</div>
                        <div class="line3">
                            <span>￥{{item.retailPrice}}</span>
                            <i class="iconfont icongouwuche cart"></i>
                        </div>
                    </div>
                    </div>
                    <div v-if="(index%2) == 0" class="item1">
                        <div class="infoWrap">
                            <div class="num">{{index+1}}</div>
                            <div class="line1">{{item.name}}</div>
                            <div class="line2">{{item.simpleDesc}}</div>
                            <div class="line3">
                                <span>￥{{item.retailPrice}}</span>
                                <i class="iconfont icongouwuche cart"></i>
                            </div>
                        </div>
                        <div class="imgWrap">
                            <a href="javascript:;">
                                <img :src="item.listPicUrl"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
// import {startPop} from 'api/newPerson'
import Json from 'api/json/home.js'
export default {
    data() {
        return {
            starP:[]
        }
    },
    async created() {
        // let da = await startPop();
        let da =Json.starReputationModule;
        this.starP = da;
    },
}
</script>
<style lang="scss" scoped>
    .starReputationModule{
    margin-bottom: .2rem;
    background: #fff;
}
.starReputationModule h2{
    width: 100%;
    height: 1.2rem;
    background: #fff;
    font-size: .3rem;
    font-weight: 700;
    line-height: 1.2rem;
    text-align: center;
    color: #333;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.starList{
    padding-bottom: .36rem;
}
.oneItem{
    margin-top: .24rem;
    height: 3.8rem;
}
.imgWrap{
    float: left;
    display: inline-block;
    width: 3.8rem;
    height: 3.8rem;
}
.item2  .imgWrap{
    float: right;
}
.item2  .infoWrap{
    float: left;
}
.imgWrap a,.imgWrap a img{
    display: block;
    width: 100%;
    height:100%;
}
.infoWrap {
    float: right;
    margin-right: .3rem;
    padding-top: .58rem;
    width: 3.3rem;
    height: 100%;
    padding-left: .1rem;
    overflow: hidden;
    color: #333;
    box-sizing: border-box;
}
.infoWrap  .num{
    font-size: .6rem;
    font-weight: 800;
    line-height: .8rem;
}
.infoWrap>.line1{
    overflow: hidden;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .37333rem;
    line-height: .53333rem;
}
.infoWrap>.line2{
    font-size: .32rem;
    color: #7f7f7f;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.infoWrap>.line3{
    margin-top: .05333rem;
    height: .6rem;
    line-height: .6rem;
    font-family: PingFangSC-Regular;
    font-size: .36rem;
    color: #B4282D;
}
.infoWrap .cart{
    display: inline-block;
    margin-left: .2rem;
    width: .6rem;
    height: .6rem;
    border-radius: .3rem;
    background: #B4282D;
    line-height: .6rem;
    text-align: center;
    font-size: .3rem;
    color: #fff;
}
</style>