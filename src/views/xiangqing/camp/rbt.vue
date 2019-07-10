<template>
<div class="box-img">
  <div class="swiper-container" ref="banner">
    <!-- <slot name="banner" :content="banners"></slot> -->
    <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
                        <img :src="item"/>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
  </div>

  <div class="detailBaseInfo">
    <div class="img-bottm">
        <div class="span">￥998</div>
        <div class="min">新品 ></div>
        <div class="info">自动喷香机</div>
        <div class="dese">定时自动喷香，时刻芬芳环绕</div>
    </div>
    <div class="shoppingReward">
        <span class="lable">购物返:</span>
        <span class="reactid">新用户最高返</span>
        <span class="points">¥1回馈金 + 9积分</span>
    </div>
    <div class="listItem">
        <span class="sl">请选择规格数量</span>
        <i class="iconfont icongengduo"></i>
    </div>
    <div class="distribution">
        <div class="dist-left">配送：</div>
        <div class="dist-right">请选择配送地址</div>
    </div>
    <div class="serve">
        <div class="serve-left">服务：</div>
        <div class="serve-right">支持30天无忧退换货,满88元免邮费</div>
    </div>
</div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import axios from "axios";
export default {
  name: "banner",

  data() {
    return {
      banners: [
        "https://yanxuan.nosdn.127.net/fcd5f25415cda937dbc5244037d4ba93.jpg",
         "https://yanxuan.nosdn.127.net/fcd5f25415cda937dbc5244037d4ba93.jpg",
          "https://yanxuan.nosdn.127.net/fcd5f25415cda937dbc5244037d4ba93.jpg",
           "https://yanxuan.nosdn.127.net/fcd5f25415cda937dbc5244037d4ba93.jpg",
      ]
    };
  },
  mounted(){
       new Swiper(this.$refs.banner, {
          autoplay: true,
          // 如果需要分页器
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
  }
//   watch: {
//     banners(newval) {
//       this.$nextTick(() => {
       
//       });
//     }
//   },
};
</script>

<style>
.box-img{
    position: absolute;
    top: 0.8rem;
    bottom: 1rem;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

}
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
.detailBaseInfo{
    width: 100%;
}
.span{
    height: 1rem;
    color: red;
    font-size: .6rem;
    line-height: 1rem;
    margin-left: 0.2rem;
}
.min{
    width: 1.2rem;
    height: .4rem;
    border: 1px solid red;
    font-size: 0.3rem;
    margin-left: 0.2rem;
}
.info{
    font-size: .42667rem;
    margin-bottom: .02667rem;
    font-family: PingFangSC-Regular;
    margin-top: .18667rem;
    margin-left: 0.2rem;
}
.dese{
    font-size: .32rem;
    height: 0.6rem;
    line-height: .6rem;
    color: #7f7f7f;
    margin-bottom: .4rem;
    border-bottom: 0.3rem solid #ccc;
    text-indent: 0.2rem;
}
.shoppingReward{
    height: 0.8rem;
    margin-bottom: 0.2rem;
    border-bottom: 0.3rem solid #ccc;
    text-indent: 0.2rem;

}
.lable{
    font-size: 0.3rem;
}
.reactid{
    font-size: 0.3rem;
}
.points{
    font-size: 0.3rem;
    color: red;
}
.listItem{
height: 0.8rem;
margin-bottom: 0.2rem;
padding-left: 0.2rem;
line-height: 0.8rem;
border-bottom: 1px solid #ccc;
}
.sl{
    font-size: 0.3rem;
    float: left;
}
.icongengduo{
    float: right;
    font-size: 0.3rem;
    margin-top: 0.1rem;
}
.distribution{
    height: 0.8rem;
margin-bottom: 0.2rem;
padding-left: 0.2rem;
line-height: 0.8rem;
border-bottom: 1px solid #ccc;
font-size: 0.3rem;

}
.dist-left{
    float: left;

}
.dist-right{
    float: left;
}
.serve{
    height: 0.8rem;
margin-bottom: 0.2rem;
padding-left: 0.2rem;
line-height: 0.8rem;
border-bottom: 1px solid #ccc;
font-size: 0.3rem;

}
.serve-left{
    float: left;
}
.serve-right{
    float:left;
    }
</style>

