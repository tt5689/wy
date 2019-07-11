<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.zyydisplaynoneboyyom"/>
  </div>
</template>
<script>
import TabBar from 'common/footer/tabbar.vue'
import Vuex from 'vuex';
export default {
  created() {
    this.getHomeInfor();
    this.getClassList();
  },
  components:{
    TabBar
  },
   methods: {
    ...Vuex.mapActions({
      getHomeInfor:"home/getActionhomeNav",
      getClassList:'home/getClassList',
    })
  },
}
</script>
<style lang="scss">
#app{
  height: 100%;
}
</style>
