<template>
    <div class="welfareWrap">
        <div>
            <strong>福利栏目</strong>
            <span>吃穿家清, 每周有新折扣</span>
        </div>
        <ul>
            <li v-for ="(item,index) in fuList" :key="index">
                <a href="#">
                    <img :src="item.bigImageUrl"/>
                </a>
            </li>
        </ul>
        <div class="plogin">
            <a href="#"><strong>福利社红包: </strong>领取请先登录</a>
        </div>
    </div>
</template>

<script>
import {getcanteen} from "api/canteen";
export default {
   async created(){
        let data = await getcanteen();
        data = data.data;
        this.fuList = data.saleAdPositionVOList;
    },
    data() {
        return {
            fuList:[]
        }
    },

}
</script>

<style lang="scss" scoped>
    .welfareWrap{
        min-height: 5.78rem;
        background: #fff;
        margin-bottom: .2rem;
        padding: 0 .3rem;
        strong{
            line-height: .8rem;
            font-size: .3rem;
            color: #333333;
            font-weight: 600;
        }
        span{
            font-size: .22rem;
            color: #7f7f7f;
        }
        ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: .24rem;
            width: 100%;
            li{
                width: 48%;
                height: 3.7rem;
                flex-shrink: 0;
                margin-right: .1rem;
                margin-bottom: .04rem;
                a,img{
                    display: block;
                    width: 100%;
                    height: 100%
                }
            }
        }
        .plogin{
            width: 100%;
            height: .72rem;
            background: #ffe8e9;
            line-height: .72rem;
            border-radius: .06rem;
            a{
                display: block;
                padding-left: .4rem;
                color: #b4282d;
                font-size: .24rem;
                strong{
                   color: #b4282d; 
                }
            }
        }
    }
    .welfareWrap::-webkit-scrollbar {
  display: none;
}
</style>