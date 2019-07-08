<template>
    <div id="zyytabBar">
        <ul>
            <router-link class="tabbarlist" tag="li" v-for="(item,index) in zyytabBars" :key="index" :to="item.path">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"zyytabBar",
    data() {
        return {
            zyytabBars:[
                {
                    icon:"&#xe69a;",
                    title:"热销榜",
                    path:"/zyyhotsales"
                },
                {
                    icon:"&#xe647;",
                    title:"特惠榜",
                    path:"/zyyspecialoffer"
                },
                {
                    icon:"&#xe662;",
                    title:"新品榜",
                    path:"/zyynewproduct"
                },
                {
                    icon:"&#xe631;",
                    title:"好评榜",
                    path:"/zyygoodreputation"
                }
            ],
        }
    },
    
}
</script>

<style scope>
     #zyytabBar {
        height: .88rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: #fff;
    }
    #zyytabBar ul {
        width: 100%;
        height: .88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
     .tabbarlist{
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: .88rem;
        text-align: center;
        font-size: .3rem;
    }
    .tabbarlist i{
        font-size: .3rem;
        margin-right: .1rem;
    }
    #zyytabBar ul span {
        color: #333;
    }
    .router-link-active {
        color: #d93333;
        background-color: #ffe5e5;
    }
</style>
