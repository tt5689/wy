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
        <div class="span">{{val.retailPrice}}</div>
        <div class="min">新品 ></div>
        <div class="info">{{val.name}}</div>
        <div class="dese">{{val.simpleDesc}}</div>
    </div>
    <div class="shoppingReward">
        <span class="lable">购物返:</span>
        <span class="reactid">新用户最高返</span>
        <span class="points">¥1回馈金 + 9积分</span>
    </div>
    <div class="listItem">
        <span class="sl">规格数量</span>
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
<div class="footer">
    <button class="footer-left">联系我们</button>
    <button class="footer-center">立即购买</button>
    <v-touch tag="button" class="footer-right" @tap="handlerClick">加入购物车</v-touch>
</div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import axios from "axios";
export default {
  name: "banner",
  props:['val'],
  created() {
    console.log(this.val);
  },
  methods: {
    handlerClick(){
      if(this.val){
      var id = this.val.id;
      var localArr = JSON.parse(localStorage.getItem('idArr'));
      if(localArr){
        var flag = true;
          localArr.forEach((element,index) => {
              if(element.id == id){
                flag = false;
              }
          });
          if(flag){
            localArr.push(this.val.id);
          }
      }else{
        localArr = [];
        localArr.push(this.val.id);
      }
      localStorage.setItem('idArr',JSON.stringify(localArr));
      }
    }
  },
  data() {
    return {
      banners: [
        "https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png",
        "https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png",
        "https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png",
        "https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png",
        
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
    color: #B4282D;
    font-size: .6rem;
    line-height: 1rem;
    margin-left: 0.2rem;
}
.min{
    width: 1.2rem;
    height: .4rem;
    border: 1px solid #B4282D;
    font-size: 0.3rem;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    text-align: center;
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
    border-bottom: 1px solid #ccc;
    text-indent: 0.2rem;
}
.shoppingReward{
    height: 0.8rem;
    margin-bottom: 0.2rem;
    border-bottom: 1px solid #ccc;
    text-indent: 0.2rem;

}
.lable{
    font-size: 0.3rem;
     font-weight: 900;
}
.reactid{
    font-size: 0.3rem;
}
.points{
    font-size: 0.3rem;
    color: #B4282D;
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
     font-weight: 900;
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
    font-weight: 900;

}
.dist-right{
    float: left;
    font-size: 0.25rem
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
     font-weight: 900;
}
.serve-right{
    float:left;
    font-size: 0.25rem;
    }

      .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    border-top: 1px solid #ccc;
}
.footer-left{
    height: 100%;
    width: 2.08rem;
    border:0;
    float: left;
    background: #fff;
     font-family: PingFangSC-Light,helvetica,'Heiti SC';
    font-weight: 900;
    font-size: 0.34rem;
}
.footer-center{
    width: 3.36rem;
    height: 100%;
    border-top: 0;
    border-bottom: 0;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    float: left;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    font-weight: 900;
    background: #fff;
}
.footer-right{
    width: 2rem;
    height: 100%;
    background: #B4282D;
    border: 0;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    }
</style>

