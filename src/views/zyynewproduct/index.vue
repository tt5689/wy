<template>
    <div id="zyynewproduct">
        <ZyyTop/>
        <ZyynewproductBody/>
        <ZyytabBar/>
    </div>
</template>

<script>
import ZyyTop from 'common/zyyheader/zyyTop'
import ZyynewproductBody from 'components/ymzyy/zyynewproductBody'
import ZyytabBar from 'common/zyyfooter/zyytabBar.vue'
export default {
    name:"zyynewproduct",
    components: {
        ZyyTop,
        ZyynewproductBody,
        ZyytabBar
    }
    
}
</script>

<style scope>
    #ZyynewproductBody{
        display: flex;
        flex-direction: column;
    }
</style>
