<template>
  <div class="canNavwarp" ref="scrolNav">
    <v-touch tag="a" v-for="(item,index) in data" :key="index"
    :class="activeIndex == index?'active':''" 
    @tap="handleToggle(index)">
    {{item}}
    </v-touch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:['领券中心','今日折扣','量贩组合','我的福利'],
      navTop: "" ,//记录刚进入页面nav距离top的值
      activeIndex:-1,
      tickT:0,
      discT:0,
      composeT:0,
      amazT:0,
    };
  },
  mounted() {
    if(this.$refs.scrolNav){
      var parent = this.$refs.scrolNav.parentNode;
      window.addEventListener("scroll", this.handlerScroll);
      this.navTop = this.offset(this.$refs.scrolNav);
      this.tickT = this.offset(parent.querySelector('#ticketCent'));
      this.discT = this.offset(parent.querySelector('#lowerPrice'));
      this.composeT = this.offset(parent.querySelector('#t-floorWrap'));
      this.amazT = this.offset(parent.querySelector('#amazingWrap'));
    }
    
  },
  methods: {
    //滚动到一定高度 变为固定定位
    handlerScroll(index) {
      var scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        var alist = this.$refs.scrolNav.querySelectorAll('a');
        var len = alist.length-1;
        if (scrollTop >= this.navTop) {
          this.$refs.scrolNav.style.cssText ="position:fixed;top:.88rem;left:0;"
          if(scrollTop>=this.amazT){
            this.tremoveClass(alist,3)
          }else if(scrollTop>=this.composeT){
            this.tremoveClass(alist,2)
          }else if(scrollTop>=this.discT){
            this.tremoveClass(alist,1)
          }else if(scrollTop>=this.tickT){
            this.tremoveClass(alist,0)
          }
        }else{
          this.$refs.scrolNav.style.cssText ="position:relative;top:0;"
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
    },
    handleToggle(index){
        this.activeIndex = index;
        switch (index){
          case 0 :{
            document.documentElement.scrollTop = this.tickT;
            break;
          }
          case 1:{
            document.documentElement.scrollTop = this.discT;
            break;
          }
           case 2:{
            document.documentElement.scrollTop = this.composeT;
            break;
          }
           case 3:{
            document.documentElement.scrollTop = this.amazT;
            break;
          }
        }
        
    },
    tremoveClass(list,index){
      for(var i=0;i<list.length;i++){
        if(i==index){
          list[i].classList.add('active');
          continue;
        }
        list[i].classList.remove('active');
      }
    }
  },
  beforeDestroy() {
    // 移除绑定事件
    window.removeEventListener("scroll", this.handlerScroll);
  }
};
</script>

<style lang="scss" scoped>
.canNavwarp {
  width: 100%;
  height: 0.82rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
  a {
    display: inline-block;
    width: 24%;
    line-height: 0.82rem;
    color: #7f7f7f;
    font-size: 0.24rem;
    text-align: center;
  }
  a:hover {
    background: #ffeeef;
    color: #b4286b;
  }
  .active {
    background: #ffeeef;
    color: #b4286b;
  }
}
</style>