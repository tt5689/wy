<template>
<div class="main">
    <div class="top">
        <img class="img01" src="https://yanxuan.nosdn.127.net/e5d222456b15bd11e438526dcca5fba4.jpg?imageView&thumbnail=0x196&quality=75" alt="">
    </div>
    <div class="contion">
        <figure v-for="(item,index) in hotKeywordNav" :key= "index">
            <img :src="item.picUrl"  class="img02">
            <figcaption>{{item.listName}}</figcaption>  
        </figure>



    </div>
</div>
    
</template>
<script>
import {ficationNav} from "api/home/thome.js";
export default {
     async created() {
         let data = await ficationNav();
         console.log(data);
         this.hotKeywordNav = data.data;
         console.log( this.hotKeywordNav);

    },
      data(){
        return{
            hotKeywordNav:[]

        }

    }
    
}
</script>
<style scoped>
    .main{
        position: absolute;
        top: 0.8rem;
        left: 2.06rem;
        width: 5rem;;
        float: right;
        padding: 0.2rem
        
    }
    .top{
        width: 4.9rem;
        height: 1.92rem;
        margin-top: 0.3rem;
        margin-bottom: 0.5rem;
    }
    .top .img01{
         width: 4.9rem;
        height: 1.92rem;

    }
    .contion{
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box
    }
    figure {
        width: 1.12rem;
        flex: 33.33%;
    }
    figure .img02{
        display: block;
        width: 1.5rem;
        height: 1.5rem;
    }
    figcaption{
        width: 1.44rem;
        height: 0.72rem;
        text-align: center;
        font-size: 0.26rem;
    }

</style>
