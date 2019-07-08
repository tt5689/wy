<template>
    <div class="pinModule">
            <div class="m-titleWithSubTitle">
                <div class="fa-line1">严选1元拼团</div>
                <div class="fa-line2">新人专享 一起买更实惠</div>
            </div>
            <div class="pinList">
                <div class="pinItem" v-for="(item,index) in pinList" :key="index">
                    <a href="javascript:;">
                        <img :src="item.picUrl"/>
                        <div class="db">
                            <h3>{{item.name}}</h3>
                            <div class="pinclass">
                                <span class="newprice">￥{{item.totalPrice}}</span>
                                <span class="originprice">单买价格<i>￥{{item.originTotalPrice}}</i></span>
                            </div>
                            <button class="kaitua">去开团</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
import {pinList} from 'api/newPerson'
export default {
    data(){
        return {
            pinList:[]
        }
    },
    async created() {
        var dd = await pinList();
        this.pinList = dd.data;
    },
}
</script>
<style lang="scss" scoped>
.m-titleWithSubTitle {
    padding: .28rem 0;
    width: 100%;
    height: 0.88rem;
    text-align: center;
}
.fa-line1{
    position: relative;
    height: .48rem;
    line-height: .48rem;
    font-size: .28rem;
    font-weight: 700;
    color: #333;
}
.fa-line2{
    margin-top: .04rem;
    font-size: .24rem;
    color: #7f7f7f;
}
    .pinModule{
    margin-bottom: .2rem;
    padding: 0 .3rem;
    background: #fff;
}
.pinItem{
    position: relative;
    height: 5.4rem;
}
.pinItem a{
    display: block;
    width: 100%;
    height: 100%;
}
.pinItem a img{
    width: 100%;
    height: 3.86rem;
}
.db{
    padding: .25rem 0 .40rem;
    position: relative;
}
.db h3{
    margin-bottom: .08rem;
    font-size: .3rem;
    line-height: .33rem;
    width: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.pinclass{
    height: .48rem;
    line-height: .48rem;
}
.newprice{
    color: #b4282d;
    font-size: .3rem;
}
.originprice{
    position: relative;
    margin-left: .08rem;
    color: #999;
    font-size: .28rem;
}
.originprice i{
    text-decoration: line-through;
}
.kaitua{
    position: absolute;
    right: 0;
    top: .30667rem;
    font-size: .37333rem;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    border-radius: 4px;
    overflow: hidden;
}
</style>