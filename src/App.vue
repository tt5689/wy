<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>
<script>
import TabBar from 'common/footer/tabbar.vue'
export default {
  components:{
    TabBar
  }
}
</script>
<style lang="scss">
</style>
