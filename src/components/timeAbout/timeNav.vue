<template>
  <div class="screen-tabs">
    <ul class="t-inner">
      <li class="t-item" v-for="(item,index) in timeList" :key="index">
        <p :class ="item.status ==1?'active time':'time'">{{item | toHou}}:00</p>
        <p :class ="item.status ==1?'tactive statusTxt':'statusTxt'" >{{item | timeText}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getTime } from "api/timeBuy";
import Vue from 'vue';
Vue.filter('toHou',(val)=>{
    var date = new Date(val.startTime);
    if (date.getHours() <= 9) {
          return "0" + date.getHours();
        } else {
          return date.getHours();
        }
})
Vue.filter('timeText',(val)=>{
    var dat = new Date().getDate();
    var date = new Date(val.startTime);
    if (date.getDate() <= 9) {
        var d = "0" + date.getDate();
    } else {
        var d = date.getDate();
    }
    if(val.status == 0) {
        return '已开始'
    }else if(val.status ==1){
        return '抢购中'
    }else if(val.status == 2 && dat == d){
        return '即将开始'
    }else{
        return '明日开抢'
    }
})
export default {
  data() {
    return {
      timeList: []
    };
  },
  async created() {
    var data = await getTime();
    if (data.data) {
     this.timeList = data.data.screenList;
    }
  },
};
</script>

<style lang="scss" scoped>
.screen-tabs {
  height: 1.04rem;
  border-top-left-radius: 0.10667rem;
  border-top-right-radius: 0.10667rem;
  overflow: hidden;
}
.screen-tabs > .t-inner {
  display: flex;
  align-items: center;
  height: 1.04rem;
  background: url("https://yanxuan.nosdn.127.net/7f2f2c90000c9856f2ad1857a3b7225b.png")
    no-repeat;
    overflow-x: auto;
}
.t-inner::-webkit-scrollbar{
    display: none;
}
.t-item {
  flex-shrink: 0;
  position: relative;
  height: 1.04rem;
  text-align: center;
    width: 1.6rem;
}
.time {
  margin-top: 0.16rem;
  font-size: 0.3rem;
  opacity: 0.7;
  color: #fff;
  text-align: center;
  line-height: 0.36rem;
}
.active{
    opacity: 1;
    font-weight: 900;
}
.statusTxt {
  margin-top: 0.02rem;
  color: #fff;
  font-size: 0.22rem;
  opacity: 0.7;
  text-align: center;
  line-height: 0.36rem;
}
.tactive{
    background: #fff;
    color: red;
    opacity: 1;
    border-radius: .08rem;
}
</style>