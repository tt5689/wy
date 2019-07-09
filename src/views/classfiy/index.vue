<template>
<div id="wrap">
    <div id="header_wrap">
        <Header/>
        <List/>
        <Main/>
    </div>
    
</div>



</template>
<script>
import Header from "./camp/header.vue"
import List from "./camp/list.vue"
import Main from "./camp/main.vue"
export default {
    components:{
        Header,
        List,
        Main,
    
}
}
</script>
<style scoped>
    #header_wrap{
        width: 100%;
        height:100%;
        position: fixed;
        top: 0;
        left: 0;
    }


</style>

