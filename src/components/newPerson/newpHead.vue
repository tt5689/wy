<template>
<div>
     <div class="newPbanner"></div>
        <div class="coupons">
            <div class="inner">
                <div class="innertop">
                    <span class="title">新人礼</span>
                    <span class="rule">活动规则 >></span>
                </div>
                <img src="https://yanxuan.nosdn.127.net/eb5b9647cdcc4a8b29f686b72e046a9e.png" />
                <div class="loginBtn">立即领取</div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .newPbanner{
    height: 6.13rem;
    background: url('https://yanxuan.nosdn.127.net/b670ea754e7d9f7abb85d4b37f321ada.png') no-repeat;
    background-size: 100% 100%;
}
.coupons{
    position: relative;
    width: 100%;
    height: 4.6rem;
    background: #fff;
    padding: 0 .3rem;
    box-sizing: border-box;
}
.inner{
    position: absolute;
    left: .4rem;
    bottom: 0;
    padding: 0 .46rem;
    width: 5.6rem;
    height: 6.66rem;
    background: #fff;
    box-shadow: 0 0.10667rem 0.32rem 0 rgba(153,153,153,.24);
}
.innertop{
    display: flex;
    justify-content: space-between;
    height: 1.02rem;
    line-height: 1.02rem;
}
.title{
    font-weight: 700;
    font-size: .32rem;
    color: #333;
}
.rule{
    float: right;
    color: #7f7f7f;
    font-size: .28rem;
}
.inner img{
    width: 100%;
    height: 4.14rem
}
.loginBtn{
    margin: .38rem auto 0;
    width: 2.94rem;
    height: .7rem;
    background: #B4282D;
    border-radius: .10667rem;
    font-family: PingFangSC-Regular;
    font-size: .32rem;
    color: #fff;
    line-height: .7rem;
    text-align: center;
}
</style>