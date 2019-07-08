<template>
    <div class="newPMain">
        <NewPHead/>
        <ServerBar/>
        <NewPNav/>
        <Exclusive/>
        <Popular/>
        <StarP/>
        <AppSale/>
        <FlasItem/>
        <PinList/>
    </div>
</template>

<script>
import NewPHead from './newpHead.vue';
import ServerBar from './serverBar.vue';
import NewPNav from './newPNav.vue';
import Exclusive from './exclusiveModule';
import Popular from './popularItem';
import StarP from './starPop';
import AppSale from './appSaleItem';
import FlasItem from './flashSale';
import PinList from './pinModul'
export default {
    name:'newPerson',
    components:{
        NewPHead,
        ServerBar,
        NewPNav,
        Exclusive,
        Popular,
        StarP,
        AppSale,
        FlasItem,
        PinList
    },
   
    
}

</script>

<style lang="scss" scoped>
    .newPMain{
        margin-bottom: .98rem;
    }
</style>