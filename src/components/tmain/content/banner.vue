<template>
  <div class="swiper-container" ref="banner">
    <slot name="banner" :content="banners"></slot>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import axios from "axios";
export default {
  name: "banner",
  

  async created() {
    let dat = await axios({
      method: "get",
      url: "http://localhost:3000/focusList"
    });
    for(var i= 0;i<dat.data.length;i++){
    //  this.banners.push(dat.data[i].picUrl);
    }
    // console.log(this.banners);
  },
    data() {
    return {
      banners: [
        "https://yanxuan.nosdn.127.net/fcd5f25415cda937dbc5244037d4ba93.jpg",
        "https://yanxuan.nosdn.127.net/29d4de4061d75b1c96e379cc5ead347d.jpg",
        "https://yanxuan.nosdn.127.net/7fd0cf4ba8cd7c27d4471911b22bc6ee.jpg",
        "https://yanxuan.nosdn.127.net/316ee2110bd16018e7924b3a6cf8fa96.jpg",
        "https://yanxuan.nosdn.127.net/219f0a04feda3ed343cc458c50aab3f4.jpg",
        "https://yanxuan.nosdn.127.net/b36d204b0f2705782b958efe56e503f0.jpg",
        "https://yanxuan.nosdn.127.net/8abf53169fe838fd3cfdfb177b3281c5.jpg",
        "https://yanxuan.nosdn.127.net/f266362b09bcb70bad07cee89ce43211.jpg"
      ]
    };
  },
  mounted() {
    new Swiper(this.$refs.banner, {
      autoplay: {
        disableOnInteraction: false
      },
      // 如果需要分页器
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 3.7rem;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}

.swiper-slide > img {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet{
    width: .4rem;
    height: .05rem;
    background: #fff;
    opacity: .4;
}
.swiper-pagination-bullet-active{
    background: #fff;
    opacity: 1;
}
</style>
