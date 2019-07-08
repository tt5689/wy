<template>
  <div class="m-cartFt">
    <input type="checkbox" />
    <span>
      已选
      <i>1</i>件
    </span>
    <strong>
      合计：
      <i>45</i>元
    </strong>
    <button class="playP">下单</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.m-cartFt{
    width: 100%;
    height: .96rem;
    background: #fff;
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
    margin-left: 2rem;
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