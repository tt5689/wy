<template>
  <div class="m-cartFt">
    <input type="checkbox" :checked="selected" @change="handlerToggle"/>
    <span>
      已选
      <i>{{count.selectN}}</i>件
    </span>
    <strong v-if="fla">
      合计：
      <i>{{count.sumPrice}}</i>元
    </strong>
    <button class="playP" v-text="fla?'下单':'删除'" @click="handerDelete"></button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'

export default {
  name:'carfooter',
  computed: {
     ...mapState({
        selected:state=>state.car.selecetedAll,
         dataList:state=>state.car.goodsList,
         fla:state=>state.car.deleSle

     }),
     ...mapGetters({
       count:"car/goodsInfor"
     }),
  },
  methods: {
    ...mapMutations({
      handlerToggle:"car/handlerToggle",
      handerDelete:"car/handerDelete"
    })
  },
};
</script>

<style lang="scss" scoped>
.m-cartFt{
    width: 100%;
    height: .96rem;
    background: rgb(204, 193, 193);
    position: fixed;
    left: 0;
    bottom: .98rem;
    padding-left: .3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #7f7f7f;
}
.m-cartFt strong{
    color: #b4282d;
    font-size: .3rem;
    margin-left: .4rem;
    margin-left: 1rem;
}
.playP{
    position: absolute;
    top: 0;
    right: 0;
    width: 2.26rem;
    border: 0!important;
    line-height: .96rem;
    height: .96rem;
    border-radius: 0;
    font-size: .37333rem;
    color: #fff;
    background-color: #b4282d;
}
</style>