<template>
    <div class="appSaleItem">
            <div class="saleTitle">
                <div class="saleline1">App特惠 ></div>
                <div class="saleline2">限时直降, 可与优惠券叠加</div>
            </div>
            <div class="saleList">
                <div class="saleItem" v-for="(item,index) in appSaleList" :key="index">
                    <a href="javascript:;">
                        <img :src="item.listPicUrl"/>
                        <div class="tagWrap">
                            <span class="tag-status gradientPrice" v-for="(itm,idx) in item.itemTagList" :key="idx">
                                {{itm.name}}
                            </span>
                            <div class="line1">{{item.name}}</div>
                            <div class="line2">
                                <span class="price">￥{{item.retailPrice}}</span>
                                <span class="counterprice">￥{{item.counterPrice}}</span>
                            </div>
                            <div class="addGoods">加入购物车</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="appdownLoad">
                <div class="apl-line1">下载APP领1000元新人礼</div>
                <div class="apl-line2">使用APP下单即可享受APP特惠</div>
                <div class="apl-btn">立即下载</div>
            </div>
        </div>
</template>

<script>
import {appsaleItem} from 'api/newPerson'
export default {
    data() {
        return {
            appSaleList:[]
        }
    },
    async created() {
        var da = await appsaleItem();
        this.appSaleList = da.data;
    },
}
</script>
<style lang="scss" scoped>
    .appSaleItem{
    margin-bottom: .2rem;
    background: #fff;
    padding: 0 .3rem .32rem;
}
.saleTitle{
    padding: .28rem 0;
    width: 100%;
    height: .88rem;
    text-align: center;
    line-height: .88;
}
.saleline1{
    height: .44rem;
    font-size: .3rem;
    font-weight: 700;
    color: #333;
    line-height: .44rem;
}
.saleline2{
    margin-top: .04rem;
    font-size: .28rem;
    color: #7f7f7f;
}
.saleList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
}
.saleList .saleItem{
    display: inline-block;
    position: relative;
    padding-bottom: .2rem;
    margin-bottom: .2rem;
    width: 49%;
    height: 5.38rem;
    overflow: hidden;
    box-sizing: border-box;
    border: .01rem solid #d9d9d9;
}
.saleList .saleItem a{
    display: block;
    width: 100%;
    height: 100%;
}
.saleList .saleItem a img{
    width: 100%;
    height: 3.35rem;
    overflow: hidden;
}
.tagWrap{
    padding-left: .14rem;
}
.gradientPrice{
    background-color: #f48f18;
}
.tag-status{
    padding: .05rem .16rem;
    color: #fff;
    line-height: .26667rem;
    border-radius: .02667rem;
    margin-right: .08rem;
}
.tag-status:nth-child(1) {
    margin-left: 0;
}
.tagWrap>.line1 {
        overflow: hidden;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.3rem;
    line-height: 0.4rem;
    margin-top: .02rem;
    color: #333;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.line2>.price{
    color: #B4282D;
    font-size: .3rem;
}
.counterprice{
    margin-left: .10667rem;
    font-size: .32rem;
    color: #999;
    text-decoration: line-through;
}
.addGoods{
    display: inline-block;
    margin: .1rem 0 0 .1rem;
    width: 1.64rem;
    height: .46rem;
    border: 1px solid #B4282D;
    border-radius: .23rem;
    text-align: center;
    font-size: .29333rem;
    line-height: .46rem;
    color: #B4282D;
}
.appdownLoad{
    position: relative;
    padding: .3rem .2rem;
    margin: .12rem 0 0;
    height: .68rem;
    background: #FFEEEF;
    border-radius: .10667rem;
}
.apl-line1{
    font-size: .3rem;
    color: #333;
    font-weight: 700;
}
.apl-line2{
    margin-top: .16rem;
    font-size: .24rem;
    color: #7f7f7f;
}
.apl-btn{
    position: absolute;
    top: .42667rem;
    right: .26667rem;
    width: 1.76rem;
    height: .64rem;
    background: #B4282D;
    border-radius: .05333rem;
    text-align: center;
    color: #fff;
    font-size: .28rem;
    line-height: .64rem;
}
</style>