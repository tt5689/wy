<template>
<div class="shopCar">
<CarHeader/>
<CarFloor/>
<CarList/>
</div>
</template>
<script>
import CarHeader from 'components/shopingCar/carHead.vue'
import CarFloor from 'components/shopingCar/carfooter.vue'
import CarList from 'components/shopingCar/goodList.vue'
export default {
    components:{
        CarHeader,
        CarFloor,
        CarList
    }
}
</script>
<style scoped>
.shopCar{
    padding-bottom: 1.98rem;
    background: #eee;
}
</style>

