<template>
    <div class="t-hotsale">
        <h2>类目热销榜</h2>
        <ul>
            <li v-for="(item,index) in classList" :key="index">
                <a href="#">
                    <p>{{item.categoryName}}</p>
                    <img :src="item.picUrl"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import {categoryHotSellModule} from 'api/home/thome.js'
export default {
    async mounted() {
        let d =  await  categoryHotSellModule();
        this.classList = d.data;
    },
    data(){
        return {
            classList:[]
        }
    }
}
</script>

<style lang="scss" scoped>
    .t-hotsale{
        min-height: 7.12rem;
        background: #fff;
        padding: 0 .3rem;
        margin-bottom: .2rem;
        h2{
            line-height: 1rem;
            font-size: .3rem;
        }
        ul{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-content: flex-start;
            li{
                width: 1.66rem;
                height: 1.8rem;
                background-color: #F5F5F5;
                margin-bottom: .12rem;
                p{
                    font-size: .22rem;
                }
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    img{
                        width: 1.2rem;
                        height: 1.2rem;
                    }
                }
            }
            li:nth-of-type(1),li:nth-of-type(2){
                width: 48%;
                height: 2rem;
                background-color: #F9F3E4;
                p{
                    font-size: .28rem;
                    padding: .56rem 0 0 .26rem;
                    float: left;
                }
                img{
                    float: right;
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
        
    }
</style>
