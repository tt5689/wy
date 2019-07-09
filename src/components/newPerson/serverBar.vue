<template>
     <div class="serviceBar">
            <div class="item">
                <i class="iconfont iconyi icon"></i>
                <span class="icon_txt">网易自营</span>
            </div>
            <div class="item">
                <i class="iconfont iconrenminbicaiwuzhifu icon"></i>
                <span class="icon_txt">一线大牌制造商</span>
            </div>
            <div class="item">
                <i class="iconfont iconhuiyuan icon"></i>
                <span class="icon_txt">30天无忧退换</span>
            </div>
            <div class="item">
                <i class="iconfont iconhothuorererexiao icon"></i>
                <span class="icon_txt">48小时极速退款</span>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .serviceBar{
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;
    padding: 0 .3rem;
    width: 100%;
    height: 1.36rem;
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
}
.item{
    display: inline-block;
    padding: .44rem 0 .24rem;
    text-align: center;
}
.icon{
    display: inline-block;
    width: .36rem;
    height: .36rem;
    font-size: .3rem;
    line-height: .36rem;
    color: #999;
}
.icon_txt{
    display: block;
    font-size: .26667rem;
    color: #999;
    line-height: .4rem;
}
</style>