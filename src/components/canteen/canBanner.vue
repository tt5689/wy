<template>
    <div class="canbanner">
        <a href="javascript" v-for="(item,index) in bannerList" :key="index">
          <img :src="item.picUrl" />
        </a>
      </div>
</template>

<script>
import {getcanteen} from "api/canteen";
export default {
   async created(){
        let data = await getcanteen();
        data = data.data;
        this.bannerList = data.saleBanner;
    },
   
  data() {
    return {
      bannerList:[]
    }
  },
};
</script>
<style lang="scss" scoped>
.canbanner {
  height: 3.8rem;
  background: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  a {
    display: block;
    width: 6.68rem;
    height: 3.28rem;
    padding: 0.2rem;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.canbanner::-webkit-scrollbar {
  display: none;
}
</style>
