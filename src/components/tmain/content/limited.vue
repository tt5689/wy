<template>
  <div class="time_by">
      <CommHead :val="title" :fla="true"/>
      <ul>
          <li v-for="(item,index) in axoisData" :key="index">
                <router-link to="/timeB" tag='a'>
                  <img :src="item.showPicUrl"/>
                  <p>￥{{item.activityPrice}}<i>￥{{item.originPrice}}</i></p>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import CommHead from './commHead.vue';
// import {flashSaleModule} from 'api/home/thome.js'
import Json from 'api/json/home.js'
export default {
  components: {
    CommHead
  },
  async created() {
  //  let data = await  flashSaleModule();
  let data = Json.flashSaleModule;
   data.itemList.forEach(element => {
     var obj = {};
     obj.activityPrice = element.activityPrice;
     obj.originPrice = element.originPrice;
     obj.showPicUrl = element.showPicUrl;
     this.axoisData.push(obj);
   });
  },
  data() {
    return {
      hour:'',
      min:'',
      seconds:'',
      timer3:'',
      title: `限时购<span><i>00</i>:<i>11</i>:<i>22</i></span>`,
      axoisData:[]
    };
  },
  mounted() {
   this.timer3 = setInterval(function () {
      var data = new Date();
      var obj = 24 * 60 * 60;
      var obj1 = data.getHours() * 60 * 60 + data.getMinutes() * 60 + data.getSeconds();
      var sub = obj - obj1;
      this.hour = parseInt(sub / 3600);
      this.min = parseInt((sub - this.hour * 3600) / 60);
      this.seconds = sub - this.hour * 3600 - this.min * 60;
      this.hour = this.hour < 10 ? ('0' + this.hour) : this.hour;
      this.min = this.min < 10 ? ('0' + this.min) : this.min;
      this.seconds = this.seconds < 10 ? ('0' + this.seconds) : this.seconds;
      }.bind(this), 1000);
  }, 
    beforeDestroy() {
      clearInterval(this.timer3)
    },
  watch: {
    seconds(){
      this.title= `限时购<span><i>${this.hour}</i>:<i>${this.min}</i>:<i>${this.seconds}</i></span>`
    }
  },
};
</script>

<style lang="scss" scoped>
.time_by {
  min-height: 7rem;
  background: #fff;
  margin-bottom: 0.2rem;
  padding:0 .3rem;
  ul{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: flex-start;
      li{
          width: 2.16rem;
          margin-top: .2rem;
          a{
              display: block;
              img{
                  width: 100%;
                  height: 2.16rem;
                  background: #f5f5f5;
              }
              p{
                  padding-left: .2rem;
                  font-size: .2rem;
                  color: #b4282d;
                  line-height: .64rem;
                  i{
                      padding-left: .2rem;
                      text-decoration: line-through;
                      color: #7f7f7f;
                  }
              }
          }
      }
  }
}
</style>
