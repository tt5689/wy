<template>
    <div id="zyyspecialoffer">
        <ZyyTop/>
        <ZyyspecialofferBody/>
        <ZyytabBar/>
    </div>
</template>

<script>
import ZyyTop from 'common/zyyheader/zyyTop'
import ZyyspecialofferBody from 'components/ymzyy/zyyspecialofferBody'
import ZyytabBar from 'common/zyyfooter/zyytabBar.vue'
export default {
    name:"zyyspecialoffer",
    components: {
        ZyyTop,
        ZyyspecialofferBody,
        ZyytabBar
    }
    
}
</script>

<style scope>
    #zyyspecialoffer {
        display: flex;
        flex-direction: column;
    }
</style>
