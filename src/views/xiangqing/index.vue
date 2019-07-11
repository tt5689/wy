<template>
<div class="details">

    <Top/>
    <Rbt :val="item"/>
    <!-- <Main/> -->

</div>
</template>
<script>
import Top from "./camp/top"
import Rbt  from "./camp/rbt"
// import Main from "./camp/main"
export default {
    name:"xiangqing",
    props:["item"],
    components:{
       Top,
       Rbt,
        
    
}
}
</script>
<style>

</style>
