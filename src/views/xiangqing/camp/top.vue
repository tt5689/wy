<template>
        <div id="zyyTop">
                <i class="iconfont viphome iconshouye"></i>
                <h2 v-text="viptitle" class="zyywyxttitle"></h2>
                <i :class="vipSearch" class ="iconfont vipsearch" ></i>
                <i :class="vipCar" class ="iconfont vipcar" ></i>
        </div>

</template>

<script>
export default {
    name:"top",
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
