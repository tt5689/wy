<template>
    <div class="wiew-top">
            <h1 v-html="val"></h1>
            <router-link :to ="fla?'/timeB':''" tag ='a'>更多 > </router-link>
        </div>
</template>

<script>
export default {
    props:['val','fla']
}
</script>

<style lang="scss" >
 .wiew-top{
            line-height: 1rem;
            display: flex;
            justify-content: space-between;
            h1{
                font-size: .32rem;
                span{
                    display: inline-block;
                    margin-left: .22rem;
                    i{
                        width: .36rem;
                        height: .36rem;
                        background: #000;
                        color: #fff;
                        border-radius: .04rem;
                    }
                }                
            }
            a{
                font-size: .26rem;
            }
        }
</style>
