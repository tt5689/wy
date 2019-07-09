<template>
    <div class="centeen_wrap">
        <CenTHeader/>
        <div class="canmain">
            <CanBann />
            <Welfare />
            <CanNav ref="scrolNav"/>
            <TicketCenter/>
            <!-- 这里要用利用父传子 -->
            <Lowerprice v-for="(item,index) in abPriceList" :key="index" :aPList="item"/>
            <ComposeWrap v-for="(item,index) in valueList" :key="index" :vBList="item"/>
            <Amazing/>
        </div>
    </div>
    
</template>
<script>
import CenTHeader from './canheader.vue';
import CanBann from './canBanner.vue';
import Welfare from './welfareBar.vue';
import CanNav from './canNav.vue';
import TicketCenter from './ticketCenter.vue';
import Lowerprice from './aboutlowerp.vue';
import ComposeWrap from './composeWrap.vue';
import Amazing from './amazing.vue';

import {getcanteen} from "api/canteen";
export default {
    components:{
        CenTHeader,
        CanBann,
        Welfare,
        CanNav,
        TicketCenter,
        Lowerprice,
        ComposeWrap,
        Amazing
    },
    async created(){
        let data = await getcanteen();
        data = data.data;
        if(data && data.saleModuleTypeVO){
            this.abPriceList  = data.saleModuleTypeVO[1].saleModuleVO || [];
            this.valueList  = data.saleModuleTypeVO[2].saleModuleVO || [];
        }   
    },
    data(){
        return{
            abPriceList:[],
            valueList:[],
            navTop: "" //记录刚进入页面nav距离top的值
        }
    },
  mounted() {
    window.addEventListener("scroll", this.handlerScroll);
    this.navTop = this.offset(this.$refs.scrolNav);
  },
  methods: {
    handlerScroll() {
      var scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= this.navTop) {
      }
    },
    offset(obj) {
      var t = 0;
      while (obj) {
        t += obj.offsetTop;
        obj = obj.offsetParent;
        if ((obj = document.body)) {
          return t;
        }
      }
    }
  }

}
</script>
<style lang="scss" scoped>
   .centeen_wrap{
       width: 100%;
        height: 100%;
   }
   .canmain{
       flex: 1;
       margin-top: .88rem;
       background: #f4f4f4;
       margin-bottom: .98rem;
   }
</style>