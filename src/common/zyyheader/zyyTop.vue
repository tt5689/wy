<template>
        <div id="zyyTop">
            <router-link :class="vipHome.ico" class ="iconfont viphome" :to="vipHome.path" tag="i"></router-link>
            <h2 v-text="viptitle" class="zyywyxttitle"></h2>
            <router-link :class="vipSearch" class ="iconfont vipsearch" :to="'/search'" tag="i" ></router-link>
            <router-link  :class="vipCar" class ="iconfont vipcar" :to="'/shopingcar'" tag="i"></router-link >
        </div>
</template>

<script>
export default {
    name:"zyyTop",
    data() {
        return {
            vipHome:{
                ico:"iconshouye",
                path:"/home"
            },
            viptitle:"网易严选",
            vipSearch:"iconfangdajing",
            vipCar:"iconcart"
        }
    },
    
}
</script>

<style>
    #zyyTop {
        top: 0;
        width: 100%;
        height: .88rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content:space-between;
        box-sizing: border-box;
        z-index: 99;
        position: fixed;
    }
    #zyyTop .zyywyxttitle {
        font-family: KaiTi;
        color: #333;
        font-size: .5rem;
        font-weight: 900;
    }
    #zyyTop i {
        color: #222;
        font-size: .5rem;
        padding: 0 .3rem;
    }
    .vipsearch {
        position: absolute;
        left: 5.4rem;
    }
    .vipcar {
        font-weight: 900;
    }
</style>
