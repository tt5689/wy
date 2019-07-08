<template>
    <div id="ticketCent">
        <h2>领券中心</h2>
        <div class="tickcontent">
            <a v-for="(item,index) in tickerCe" :key="index">
                <img :src="item.imageUrl[0]"/>
                <div class="text_Cent">
                    <p>{{item.name}}</p>
                    <span>{{item.rangeName}}</span><br/>
                    <b>有效时间：20190704-20190104</b><br/>
                    <div>
                        <span class="prosent">{{item.percent}}%</span>
                        <button>立即领取</button>
                    </div>

                </div>
            </a>
        </div>
    </div>
</template>
<script>
import {getcanteen} from "api/canteen";
export default {
   async created(){
        let data = await getcanteen();
        data = data.data;
        this.tickerCe = data.saleModuleTypeVO[0].saleModuleVO[0].choicenessCouponList;
    },  
    data(){
        return {
            tickerCe:[]
        }
    }
}
</script>

<style lang="scss" scoped>
    #ticketCent{
        min-height: 4.22rem;
        background: #fff;
        padding: 0 .3rem;
        h2{
            height: 1.18rem;
            line-height: 1.18rem;
            font-size: .28rem;
            font-weight: 900;
            text-align: center;
        }
        .tickcontent{
            a{
                display: block;
                height: 2.72rem;
                border: 1px solid #f7f7f7;
                margin-bottom: .3rem;
                img{
                    width: 2.72rem;
                    height: 2.72rem;
                }
                .text_Cent{
                    float: right;
                    width: 4rem;
                    padding-right: .1rem;
                    padding: .2rem;
                    box-sizing: border-box;
                    p{
                        font-size: .34rem;
                        font-weight: 900;
                    }
                    span{
                        display: block;
                        line-height: 0.56rem;
                        font-size: 0.28rem;
                        color: #333;
                        width: 3.6rem;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    b{
                        color: #7f7f7f;
                    }
                    div{
                        margin-top: .32rem;
                        span{
                            display: inline-block;
                            width: 1rem;
                            height: .3rem;
                            line-height: .3rem;
                            border:1px solid salmon ;
                            text-align: center;
                            border-radius: .14rem;
                        }
                        button{
                            width: 1.76rem;
                            height: .56rem;
                            background: #f48f18;
                            color: #fff;
                            text-align: center;
                            line-height: .56rem;
                            border: 0;
                            margin-left: .2rem;
                        }
                    }
                }
            }
        }
    }
</style>