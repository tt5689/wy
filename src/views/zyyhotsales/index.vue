<template>
    <div id="zyyhotsales">
        <ZyyTop/>
        <ZyyhotsalesBody/>
        <ZyytabBar/>
    </div>
</template>

<script>
import ZyyTop from 'common/zyyheader/zyyTop'
import ZyyhotsalesBody from 'components/ymzyy/zyyhotsalesBody'
import ZyytabBar from 'common/zyyfooter/zyytabBar.vue'
export default {
    name:"zyyhotsales",
    components: {
        ZyyTop,
        ZyyhotsalesBody,
        ZyytabBar
    },
}
        
</script>

<style scope>
    #zyyhotsales {
        display: flex;
        flex-direction: column;
    }
</style>








