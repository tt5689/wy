<template>
  <div class="swiper-container" ref="ttbanner">
    <div class="canbanner swiper-wrapper">
      <a href="javascript" class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
        <img :src="item.picUrl" />
      </a>
    </div>
  </div>
</template>

<script>
import Banner from "components/tmain/content/banner.vue";
import { getcanteen } from "api/canteen";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  async created() {
    let data = await getcanteen();
    data = data.data;
    // this.bannerList = data.saleBanner;
    setTimeout(() => {
    this.bannerList = data.saleBanner;
  }, 500);
  },
  data() {
    return {
      bannerList: [],
    }
  },
  watch: {
    bannerList(newVal,oldVal){
      if(newVal != oldVal) {
        this.$nextTick(()=>{
          this.swiper = new Swiper(this.$refs.ttbanner,{
            autoplay:true,
            loop: true
          })
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    background: #fff;
    height: 3.8rem;
  }
  .canbanner {  
    height: 100%;
    width: 100%;
    a {
      width: 6.3rem;
      height: 100%;
      img {
        width: 6.8rem;
        height: 3.5rem;
        margin-left: 0.3rem;
        margin-top: .2rem;
      }
    }
 }
  .canbanner::-webkit-scrollbar {
    display: none;
  }
</style>
