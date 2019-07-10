<template>
  <div class="shopHead">
    <span>购物车</span>
    <div class="right">
      <router-link to="/newPerson" tag="p" class="ticket" v-if="fla">领券</router-link>
      <p @click="handlerEdit" v-text="fla?'编辑':'完成'"></p>
    </div>
  </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
 
  computed: {
    ...mapState({
      fla:state=>state.car.deleSle
    })
  },
  methods: {
    ...mapMutations({
       handlerEdit:"car/handlerEdit"
    })
  },
};
</script>
<style>
.shopHead{
    height: .88rem;
    line-height: .88rem;
    padding: 0 .4rem;
    text-align: center;
    background-color: #fff;
    position: relative;
    border: 1px solid #eee;
}
.shopHead span{
    float: left;
    font-size: .4rem;
}
.right{
    float: right;
}
.right p{
    float: left;
    margin-left: .4rem;
    font-size: .3rem;
}
.ticket{
    color: #B4282D;
}
</style>

