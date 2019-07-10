<template>
    <div class="centeen_wrap">
        <CenTHeader/>
        <div class="canmain">
            <CanBann />
            <Welfare />
            <CanNav/>
            <TicketCenter/>
            <Lowerprice v-for="(item) in abPriceList" :key="item.id" :aPList="item"/>
            <ComposeWrap v-for="(itm) in valueList" :key="itm.id" :vBList="itm"/>
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
        if(data.saleModuleTypeVO.length>=3){
            this.abPriceList  = data.saleModuleTypeVO[1].saleModuleVO ;
            this.valueList  = data.saleModuleTypeVO[2].saleModuleVO ;
        } 
    },
    data(){
        return{
            abPriceList:[],
            valueList:[]
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