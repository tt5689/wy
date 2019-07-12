<template>
 <BScroll ref="bscroll">
    <template>
        
    <div class="main_wrap">
        <i class="fa fa-spinner fa-spin loading" v-if="scrollLoading"></i>
        <Banner>
            <template v-slot:banner="props">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in props.content" :key="index">
                        <img :src="item"/>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </template>
        </Banner>
        <TClassList/>
        <Gift/>
        <TopWiew/>
        <HotsaleModule/>
        <Recommend/>
        <Limited/>
        <NewGuid/>
        <GuidModule/>
        <CategoryModule v-for="(item,index) in axdata" :key="index" :mainTocaList="item"/>
        <FooterSelect/>
    </div>
    </template>
</BScroll>
</template>

<script>
import Banner from './content/banner.vue';
import TClassList from './content/t-clasfiy-list.vue';
import Gift from './content/gift.vue';
import TopWiew from './content/topwiew.vue';
import HotsaleModule from './content/hotsalwModule.vue';
import Recommend from './content/recommend.vue';
import Limited from './content/limited.vue';
import NewGuid from './content/shopGuidList.vue';
import GuidModule from './content/GuidModule.vue';
import CategoryModule from './content/CategoryModule.vue';
import FooterSelect from './content/footers.vue'

// import {categoryModule} from 'api/home/thome.js'
import Json from 'api/json/home.js'
export default {
    components:{
        Banner,
        TClassList,
        Gift,
        TopWiew,
        HotsaleModule,
        Recommend,
        Limited,
        NewGuid,
        GuidModule,
        CategoryModule,
        FooterSelect
    },
      async created() {
          console.log(Json);
        // let dt = await categoryModule();
        // this.axdata = dt.data;
        this.axdata = Json.categoryModule;
    },
    data(){
       return{
           axdata:[],
           scrollLoading:false
       }  
    },
    mounted(){
      this.$refs.bscroll.handleScrollStart(()=>{
        this.scrollLoading = true;
      })

      this.$refs.bscroll.handleScrollEnd(()=>{
        this.scrollLoading = false;
      })
  }
}
</script>

<style scoped>
.loading{
    width: 100%;
    text-align: center;
    font-size: 1rem;
}
.main_wrap{
    width: 100%;
    flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    background: #eeeeee;
    margin-top: 1.48rem;
    margin-bottom: .98rem;
}
</style>
