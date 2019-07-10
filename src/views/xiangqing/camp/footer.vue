<template>
<div class="footer">
    <button class="footer-left">联系我们</button>
    <button class="footer-center">立即购买</button>
    <button class="footer-right">加入购物车</button>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style>
    .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    border-top: 1px solid #ccc;
}
.footer-left{
    height: 100%;
    width: 2.08rem;
    border:0;
    float: left;
    background: #fff;
     font-family: PingFangSC-Light,helvetica,'Heiti SC';
    font-weight: 900;
    font-size: 0.34rem;
}
.footer-center{
    width: 3.36rem;
    height: 100%;
    border-top: 0;
    border-bottom: 0;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    float: left;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    font-weight: 900;
    background: #fff;
}
.footer-right{
    width: 2rem;
    height: 100%;
    background: red;
    border: 0;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    }
</style>