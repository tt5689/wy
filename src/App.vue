<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
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
</style>
