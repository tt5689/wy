<template>
<div class="scarch">
        <div class="top">
            <i class="iconfont iconfangdajing"></i>
            <input type="text" class="txt" placeholder="水感多效防晒凝露 SPF30">
            <span class="cancel">取消</span>
        </div>
        <div class="nav">
            <div class="nav-n">
                <header class="h3">
                    <h3>热门搜索</h3>
                </header>
            </div>
            <nav class="main">
                <a href="#" v-for="(item,index) in hotKeywordVOList" :key= "index">{{item.keyword}}</a>
            </nav>
        </div>
    </div>
</template>
<script>
import {search} from "api/search/index.js";
export default {
    async created() {
         let data = await search();
        console.log(data);
        this.hotKeywordVOList = data.data.hotKeywordVOList;
    },
    data(){
        return{
            hotKeywordVOList:[]

        }

    }
    
}

</script>


<style scoped>
.scarch{
    position: relative;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
}
.top{
    height: 0.88rem;
    padding: 0 .4rem 0 .4rem;
    padding-top: 0.44rem;
    background: #fff;
}
.txt{
    width: 5.6rem;
    height: .52rem;
    background: #f4f4f4;
    border: 0;
    text-indent: 1.5rem;
    border-radius: 0.1rem;
}
.iconfangdajing{
    position: absolute;
    top: 0.49rem;
    left: 0.7rem;
    font-size: 0.36rem;
}
.cancel{
    margin-left: .25rem;
    font-size: .28rem;
}
.nav{
    position: relative;
    background: #fff;
}
.nav-n{
    padding: 0 0 0  .4rem;
    background-color: #fff;
    overflow: hidden;
}
.h3{
    font-size: .26rem;
    color: #999;
    height: 0.8rem;
    line-height: 0.8rem;
}
.main{
    padding-left: .4rem;
    min-height: 5rem;
}
a{
    float: left;
    padding: 0 .2rem;
    margin-right: .42667rem;
    margin-bottom: .42667rem;
    line-height: .61333rem;
    border: 1px solid #999;
    border-radius: 4px;
    color: #333;
}

</style>
