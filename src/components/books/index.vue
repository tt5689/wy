<template>
 <div class="main">
    <div class="box-x" v-for="(item,index) in hotKeywordLi" :key= "index">
        <div class="u-name">
            <span class="ava">
               <img :src="item.minimg" >
            </span>
            <span class="avb">选妹</span>
        </div>
        <div class="titen">{{item.titem}}</div>
        <div class="pic">
          <img :src="item.maximg" alt="">
        </div>
        <div class="rcound">
            <i class="ico"></i>
            <span>{{item.watch}}</span>
        </div>
    </div>
   
    
</div>
</template>
<script>
// import {recommend} from "api/home/thome.js"
import Json from 'api/json/home.js'
export default {
      async created() {
        // let data = await recommend();
        let data = Json.recommend;
        console.log(data);
         this.hotKeywordLi = data;
    },
     data(){
        return{
            hotKeywordLi:[]

        }

    }
}
</script>
<style>
.main{
    position: absolute;
    top: 1.98rem;
    bottom: 0.98rem;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    
}
.box-x{
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    box-sizing: border-box;
    margin-left: 0.2rem;
}
.u-name{
    font-size: .28rem;
    color: #333;
    line-height: .36rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: .24rem;
}
.ava{
    float: left;
    margin-right: 0.2rem;
 
}
.ava img{
    width: .56rem;
    height: .56rem;
    border-radius: 50%;
    
}
.avb{
    vertical-align: middle;
    float: left;
    margin-top: 0.1rem;

}
.titen{
    font-size: .3rem;
    color: #333;
    line-height: .52rem;
    margin: .08rem 0 .16rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-family: PingFangSC-Regular;
}
.pic{
    width: 6.9rem;
    height: 3.76rem;
    position: relative;
    margin-bottom: .2rem;
    overflow: hidden;
    border-radius: .08rem;
}
.pic img{
     width: 6.9rem;
    height: 3.76rem;
}
.rcound{
    font-size: .22rem;
    color: #999;
    line-height: .32rem;
    margin-top: .18rem;
}
.ico{
    display: inline-block;
    width: .28rem;
    height: .2rem;
    vertical-align: middle;
    margin-right: .08rem;
    
}
.rcound span{
    display: inline-block;
    vertical-align: middle;
    
}

</style>
