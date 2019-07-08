<template>
   <div class="box">
    <div class="top">
        <div class="top-left">
            <i class="iconfont iconyemian"></i>
        </div>
        <div class="top-cetion">
            <a class="fx" href="">发现</a>
            <a class="zxj" href="">甄选家</a>
        </div>
        <div class="top-right">
            <i class="iconfont iconfangdajing"></i>
            <i class="iconfont icongouwuche"></i>
        </div>
    </div>
    <ul class="list">
        <router-link to="/recognize/recbody" tag="li">推荐</router-link>
        <router-link to="/recognize/nbhw" tag="li">好货内部价</router-link>
        <router-link to="/recognize/hgb" tag="li">回购榜</router-link>
        <router-link to="/recognize/sd" tag="li">晒单</router-link>
        <router-link to="/recognize/books" tag="li">开发者笔记</router-link>
    </ul>
    <!-- <router-view></router-view> -->
    <Recbody/>
   
</div>
</template>
<script>
import Recbody from "components/recbody"
export default {
    name:"recognize",
    components:{
        Recbody,
    }
    
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 100%;
}
.top{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1rem;
    border-bottom: 1px solid #ccc;
}
.top-left{
    margin-left: 0.2rem;
    height: 100%;
}
.top-cetion{
    height: 100%;
}
.top-right{
    height: 100%;
    margin-right: 0.2rem;
}
.iconfangdajing{
    margin-right: 0.2rem;
}
.fx{
    color: #b4282d;;
    font-size: 0.4rem;
    font-weight: 900;
    margin-right: 0.3rem;
}
.zxj{
    font-size: 0.25rem;
}
.list{
    position: absolute;
    top: 1rem;
    bottom: 0.98rem;
     width: 100%;
    height: .72rem;
    padding-bottom: .2rem;
    white-space: nowrap;
    display: flex;
    border-bottom:1px solid #ccc;
    z-index: 1000;
}
ul{
    width: 100%;
    height: .72rem;
}
ul li{
    display: inline-block;
    height: .72rem;
    line-height: .92rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: .28rem;
    color: #7F7F7F;
    padding: 0 .045rem;
    margin: 0 .2rem;
    vertical-align: middle;
}



</style>

