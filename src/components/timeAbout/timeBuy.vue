<template>
    <div class="time-content">
            <div class="lastTime">
                本场还剩：<i>{{hours}}</i>：<i>{{minutes}}</i>：<i>{{seconds}}</i>
            </div>
            <div class="sc-list">
                <div class="sc-item" v-for="(item,index) in itemList" :key="index">
                    <a href="javascript:;">
                        <div class="sc-left">
                            <img :src="item.listPicUrl"/>
                        </div>
                        <div class="sc-right">
                            <div class="innerName">{{item.itemName}}</div>
                            <div class="desc">{{item.simpleDesc}}</div>
                            <div class="price-saleD">
                                <span class="actulPrice">￥{{item.actualPrice}}</span>
                                <span class="retailPrice">￥{{item.retailPrice}}</span>
                                <span class="discount">{{item.priceDesc}}</span>
                            </div>
                            <div class="line">
                                <div class="progressWrap">20%</div>
                                <button class="buy_btn">马上抢</button>
                            </div>
                        </div>
                    </a>
                </div>
            </div> 
    </div>
</template>

<script>
import { getTime } from "api/timeBuy";
import BScorll from 'common/BScroll'
export default {
    data() {
        return {
            hours:'',
            minutes:'',
            seconds:'',
            timestamps:'',
            itemList:[],
            timer:''
        }
    },
    async created() {
        let data = await getTime();
        if(data.data){
        this.itemList = data.data.itemList;
        var time1;
        var sTId = data.data.screenId;
        for(var i=0;i<data.data.screenList.length;i++){
            if(data.data.screenList[i].id == sTId){
                time1 = data.data.screenList[i+1].startTime;
                break;
            }
        }
        var timestamp = time1 - data.data.currentTime;
        this.timestamps = timestamp ;
        this.hours = Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.round((timestamp % (1000 * 60)) / 1000);
        this.hours = this.hours >10 ? this.hours :'0'+this.hours;
        this.minutes = this.minutes <10 ? '0'+this.minutes:this.minutes;
        this.seconds = this.seconds <10 ? '0'+this.seconds:this.seconds;
        }        
    },
    mounted() {
        this.timer = setInterval(()=>{
            if(this.timestamps <=0){
                this.timestamps = 0;
                clearInterval(this.timer);
            }
            this.timestamps =(this.timestamps/1000 -1)*1000;
            this.hours = Math.floor((this.timestamps % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((this.timestamps % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.round((this.timestamps % (1000 * 60)) / 1000);
            this.hours = this.hours >10 ? this.hours :'0'+this.hours;
            this.minutes = this.minutes <10 ? '0'+this.minutes:this.minutes;
            this.seconds = this.seconds <10 ? '0'+this.seconds:this.seconds;
        },1000)
    },
}
</script>

<style lang="scss" scoped>
    .lastTime{
    background: #fff;
    text-align: center;
    height: .78rem;
    line-height: .78rem;
    border-left: .02rem solid rgba(255,11,14,.5);
    border-right: .02rem solid rgba(255,11,14,.5);
}
.lastTime i{
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background-color: #333;
    border-radius: .18rem;
    font-size: .29333rem;
    line-height: .36rem;
    color: #fff;
    vertical-align: middle;
    text-align: center;
    font-weight: 400;
}

.time-content{
    padding: 0 .3rem;
}
.sc-list{
    margin-top: -.1rem;
    border: .02rem solid rgba(255,11,14,.5);
    border-radius: 0 0 .10667rem .10667rem;
    border-top: none;
    background-color: #fff;
}
.sc-item{
    margin-left: .2rem;
    margin-right: .2rem;
    padding-left: 0;
    height: 2.8rem;
    border-bottom:  .01rem solid rgb(202, 200, 200);
}
.sc-item a{
    display: block;
    width: 100%;
    height: 100%;
    padding-top: .2rem;
    box-sizing: border-box;
}
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
    width: 50%;
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
}
.desc{
    margin-bottom: .12rem;
    line-height: .36rem;
    font-size: .26rem;
    color: #F48F17;
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
.discount{
    color: #DD1A21;
    white-space: nowrap;
    max-width: 2.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.progressWrap{
    display: inline-block;
    padding: 0 .2rem;
    line-height: .36rem;
    height: .36rem;
    border: 1px solid #B4282D;
    color: #B4282D;
    background: #fff;
    border-radius: .18rem;
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
.buy_btn{
    width: 1.26rem;
    height: .5rem;
    background: #B4282D;
    color: #fff;
    border-radius: .25rem;
    border:0;
    margin-left: .1rem;
}
</style>