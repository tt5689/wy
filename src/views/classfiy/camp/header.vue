<template>

<div id="box_dcp">
    <router-link :to="'/search'" tag="div" class="top_dcp">
        <i class="iconfont iconfangdajing"></i>
        <input type="text" placeholder="搜索商品, 共22438款好物"/>
        
    </router-link>
</div>


</template>
<script>
export default {
}
</script>
<style scoped>



    .top_dcp{
        width: 100%;
        height:0.88rem;
    }
    input{
            width:6.1rem;
            height:0.48rem;
            padding-left:0.8rem;
            background:#ededed;
            border-radius:.1rem;
            color:#666666;
            font-size:.3rem;
            line-height:100%;
            margin: 0.2rem;

        }
    i{
        display:inline-block;
        position:absolute;
        left:.42rem;
        top: 0.3rem;
    }

</style>

