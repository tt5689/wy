<template>
        <div class="svheader">
            <router-link to="/home" tag="i" class ="iconfont iconshouye" ></router-link>
            <h2 v-text="viptitle" class="zyywyxttitle"></h2>
            <router-link  class ="iconfont iconfangdajing" :to="'/search'" tag="i"></router-link>
            <router-link  class ="iconfont iconcart" :to="'/shopingcar'" tag="i"></router-link>
        </div>
</template>

<script>
export default {
    data() {
        return {
            viptitle:"网易严选"
        }
    },
}
</script>

<style scoped>
    .svheader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content:space-between;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        z-index: 99
    }
    .svheader .zyywyxttitle {
        font-family: KaiTi;
        color: #333;
        font-size: .5rem;
        font-weight: 900;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .svheader i {
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