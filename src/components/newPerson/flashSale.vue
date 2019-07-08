<template>
    <div class="m-flashSale">
            <div class="m-titleWithSubTitle">
                <div class="fa-line1">严选限时购</div>
                <div class="fa-line2">全站优惠 限时限量</div>
            </div>
            <div class="screen-tabs">
                <ul class="t-inner">
                    <li class="t-item">
                        <p class="time">18:00</p>
                        <p class="statusTxt">抢购中</p>
                    </li>
                    <li class="t-item">
                        <p class="time">18:00</p>
                        <p class="statusTxt">抢购中</p>
                    </li>
                    <li class="t-item">
                        <p class="time">18:00</p>
                        <p class="statusTxt">抢购中</p>
                    </li>
                    <li class="t-item">
                        <p class="time">18:00</p>
                        <p class="statusTxt">抢购中</p>
                    </li>
                </ul>
            </div>
            <div class="sc-list">
                <div class="sc-item">
                    <a href="javascript:;">
                        <div class="sc-left">
                            <img/>
                        </div>
                        <div class="sc-right">
                            <div class="innerName">儿童护脊减负书包（1-3年级）</div>
                            <div class="desc">科学护脊，贴纸玩趣DIY</div>
                            <div class="price-saleD">
                                <span class="actulPrice">56</span>
                                <span class="retailPrice">56</span>
                                <span class="discount">7.5折</span>
                            </div>
                            <div class="line">
                                <div class="progressWrap">20%</div>
                                <button class="buy_btn">马上抢</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="sc-item">
                        <a href="javascript:;">
                            <div class="sc-left">
                                <img/>
                            </div>
                            <div class="sc-right">
                                <div class="innerName">儿童护脊减负书包（1-3年级）</div>
                                <div class="desc">科学护脊，贴纸玩趣DIY</div>
                                <div class="price-saleD">
                                    <span class="actulPrice">56</span>
                                    <span class="retailPrice">56</span>
                                    <span class="discount">7.5折</span>
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
export default {
    
}
</script>

<style lang="scss" scoped>
    .m-flashSale {
    padding: 0 .3rem .4rem;
    margin-bottom: .2rem;
    background: #fff;
}
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
.screen-tabs{
    height: 1.04rem;
    border-top-left-radius: .10667rem;
    border-top-right-radius: .10667rem;
    overflow: hidden;
}
.screen-tabs>.t-inner{
    display: flex;
    align-items: center;
    height: 1.04rem;
    background: url('https://yanxuan.nosdn.127.net/7f2f2c90000c9856f2ad1857a3b7225b.png') no-repeat;
}
.t-item{
    flex: 1;
    position: relative;
    height: 1.04rem;
    text-align: center;
}
.time{
    margin-top: .16rem;
    font-size: .3rem;
    opacity: .7;
    color: #FFF;
    text-align: center;
    line-height: .36rem;
}
.statusTxt{
    margin-top: .02rem;
    color: #fff;
    font-size: .22rem;
    opacity: .7;
    text-align: center;
    line-height: .36rem;
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
    width: 3rem;
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
.buy_btn{
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