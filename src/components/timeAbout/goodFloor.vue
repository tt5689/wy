<template>
    <div class="googGoods">
        <div v-for="(item,index) in goodGoods" :key="index">
            <div class="foorTitle">{{item.name}}</div>
            <ul>
                <li class="goodItem" v-for="(itm,idx) in item.itemList" :key="idx">
                    <a href="javascript:;">
                        <div class="sc-left">
                            <img :src="itm.listPicUrl"/>
                        </div>
                        <div class="sc-right">
                            <div class="innerName">{{itm.itemName}}</div>
                            <div class="desc">{{itm.simpleDesc}}</div>
                            <div class="price-saleD">
                                <span class="actulPrice">￥{{itm.actualPrice}}</span>
                                <span class="retailPrice">￥{{itm.retailPrice}}</span>
                            </div>
                            <div class="line">
                                <button class="see_btn">去看看</button>
                            </div>
                        </div>
                    </a>
                    <div class="showPinj">{{itm.commentInfo.content}}</div>
                </li>
            </ul>
            </div>
        </div>
</template>

<script>
import {getFloors} from 'api/timeBuy'
export default {
    data(){
        return {
            goodGoods:[]
        }
    },
    async created() {
        var dd = await getFloors();
        if(dd.data){
            this.goodGoods = dd.data;
            console.log(this.goodGoods);
        }
    },
}
</script>

<style lang="scss" scoped>
.sc-left{
    margin-right: .14rem;
    width: 2.2rem;
    height: 2.2rem;
    float: left;
}
.sc-left img{
    width:100%;
    height: 100%;
}
.sc-right{
    width: 3.6rem;
    float: right;
}
.innerName{
    margin-bottom: .02rem;
    font-size: .3rem;
    line-height: .4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    top: .01rem;
    font-weight: 900;
}
    .googGoods{
    margin: 0.2rem .3rem 0;
    background: #fff;
    border-radius: .10667rem;
}
.foorTitle{
    height: .89rem;
    line-height: .89rem;
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #333;
    font-size: .3rem;
}
.goodItem{
    margin: 0 .26667rem;
}
.goodItem a{
    display: block;
    height: 2.6rem;
}
.showPinj{
    background: #F4F4F4;
    border-radius: .54667rem;
    margin-bottom: .2rem;
    display: flex;
    padding: .09rem .2rem;
    overflow: hidden;
    position: relative;
    height: .4rem;
    line-height: .4rem;
}
.price-saleD{
    margin-bottom: .2rem;
}
.price-saleD span{
    display: inline-block;
    height: .44rem;
    line-height: .44rem;
}
.actulPrice{
    margin-right: .06rem;
    vertical-align: bottom;
    color: #DD1A21;
    font-weight: 700;
    font-size: .4rem;
}
.retailPrice{
    color: #999;
    font-size: .22rem;
    margin-right: .12rem;
    text-decoration: line-through;
}
.see_btn{
    width: 1.26rem;
    height: .5rem;
    line-height: .5rem;
    font-size: .22rem;
    font-weight: 700;
    color: #fff;
    border: 0;
    border-radius: .33333rem;
    background: #FF505E;
}
</style>