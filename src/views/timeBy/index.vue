<template>
<div>
    <THeader/>
    <div class="m-flashSale">
        <TimeNav/>
        <TimeBuy/>
        <Floors/>
        <div class="seeMore">查看更多</div>
    </div>
</div>
</template>

<script>
import THeader from 'common/zyyheader/zyyTop.vue'
import TimeNav from 'components/timeAbout/timeNav.vue';
import TimeBuy from 'components/timeAbout/timeBuy.vue';
import Floors from 'components/timeAbout/goodFloor.vue'
export default {
    components:{
        THeader,
        TimeNav,
        TimeBuy,
        Floors
    }
}
</script>

<style lang="scss" scoped>
    .m-flashSale{
    background: #eee;
    margin-top: .88rem;
    .seeMore{
    margin: .3rem;
    padding: 0 .2rem 0;
    height: .94rem;
    background: #fff;
    border: .01333rem solid #979797;
    border-radius: .05333rem;
    line-height: .94rem;
    text-align: center;
    font-size: .32rem;
    color: #333;
}
}
</style>