<template>
<div class="shopCar">
<CarHeader/>
<CarList/>
<CarFloor/>

</div>
</template>
<script>
import CarHeader from 'components/shopingCar/carHead.vue'
import CarFloor from 'components/shopingCar/carfooter.vue'
import CarList from 'components/shopingCar/goodList.vue'
import {mapActions} from "vuex"
export default {
    name:'car',
    components:{
        CarHeader,
        CarFloor,
        CarList
    },
    created() {
        this.getGoods();
    },
     methods: {
        ...mapActions({
      getGoods:"car/getActionGoods"
    })
    },
}
</script>
<style scoped>
.shopCar{
    padding-bottom: 1.98rem;
}
</style>

