<template>
    <div id="zyygoodreputation">
        <ZyyTop/>
        <Zyygoodreputation/>
        <ZyytabBar/>
    </div>
</template>

<script>
import ZyyTop from 'common/zyyheader/zyyTop'
import Zyygoodreputation from 'components/ymzyy/zyygoodreputationBody'
import ZyytabBar from 'common/zyyfooter/zyytabBar.vue'
export default {
    name:"zyygoodreputation",
    components: {
        ZyyTop,
        Zyygoodreputation,
        ZyytabBar
    }
    
}
</script>

<style scope>
    #zyygoodreputation {
        display: flex;
        flex-direction: column;
    }
</style>
