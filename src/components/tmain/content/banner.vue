<template>
  <div class="swiper-container" ref="banner">
    <slot name="banner" :content="banners"></slot>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import axios from "axios";
import {getcanteen} from "api/canteen";
export default {
  name: "banner",

  async created() {
    let dat = await axios({
      method: "get",
      url: "http://localhost:3000/focusList"
    });
    for (var i = 0; i < dat.data.length; i++) {
      this.banners.push(dat.data[i].picUrl);
    }
  },
  data() {
    return {
      banners: [
        // "https://yanxuan.nosdn.127.net/fcd5f25415cda937dbc5244037d4ba93.jpg",
      ]
    };
  },
  watch: {
    banners(newval) {
      this.$nextTick(() => {
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
      });
    }
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
.swiper-pagination-bullet {
  width: 0.4rem;
  height: 0.05rem;
  background: #fff;
  opacity: 0.4;
}
.swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}
</style>
