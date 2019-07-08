<template>
<div id="wrap">
    <div id="header_wrap">
        <Header/>
        <Nav/>
    </div>
    <MainContent/>
    <div class="toTop iconfont iconup"></div>
</div>
</template>

<script>
import Header from 'components/tmain/header.vue';
import Nav from 'components/tmain/nav.vue';
import MainContent from 'components/tmain/main_content.vue'

export default {
    name:'home',
    components:{
        Header,
        Nav,
        MainContent
        
    },
    created() {
       console.log(this.$route.meta.flag);
    },
}
</script>
<style lang="scss" scoped>
    #header_wrap{
        width: 100%;
        height:1.48rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
    }
    .toTop{
        width: .8rem;
        height: .8rem;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #ccc;
        position: fixed;
        bottom: 1.2rem;
        right: .24rem;
        z-index: 999;
        text-align: center;
        line-height: .8rem;
    }
</style>