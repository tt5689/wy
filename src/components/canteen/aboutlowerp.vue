<template>
    <div id="lowerPrice">
        <div class="priceTop" :style="'background:url('+aPList.moduleUrl+') no-repeat;background-size:cover;'">
            <p>{{aPList.title}}</p>
            <span>{{aPList.desc}}</span>
        </div>
        <div class="tgoodsList">
            <a v-for="(item,index) in aPList.itemList" :key="index">
                <img :src="item.listPicUrl"/>
                <p class="gname">{{item.name}}</P>
                <div class="tpri"><span>{{item.retailPrice}}</span><i>{{item.counterPrice}}</i></div>
                <div class="tag">
                    <p v-for="(item1,index1) in item.itemTagList" :key="index1">{{item1.name}}</p>
                </div>
            </a>
        </div>
        
    </div>
</template>
<script>
import {getcanteen} from "api/canteen";
export default {
    props:['aPList']
}
</script>
<style lang="scss" scoped>
    #lowerPrice{
        min-height: 7rem;
        background: #fff;
        .priceTop{
            height: 2.6rem;
            text-align: center;
            p{
                padding-top: .88rem;
                font-size: .32rem;
                font-weight: 900;
            }
            span{
                line-height: .66rem;
                font-size: .28rem;
                color: #7f7f7f;
            }
        }
        .tgoodsList{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            a{
                display: block;
                width: 3.72rem;
                height: 4.38rem;
                background: #fff;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                padding: .04rem .44rem 0;
                box-sizing: border-box;
                img{
                    width: 100%;
                    height: 2.8rem;
                }
                .gname{
                    line-height: .52rem;
                    font-size: .28rem;
                    font-weight: 900;
                    width: 100%;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .tpri{
                    line-height: .42rem;
                    span{
                        font-size: .2rem;
                        color: #b42b2d;
                        margin-right: .2rem;
                        font-weight: 900;
                    }
                    i{
                        font-size: .2rem;
                        color: #999999;
                        text-decoration: line-through;
                        font-weight: 900;
                    }
                }
            }
        }
        .tag{
            display: flex;
            flex-direction: row;
            p{
                padding: 0.08rem;
                line-height: 0.18rem;
                font-size: .12rem;
                border: 1px solid #b42b2d;
                border-radius: 0.04rem;
                margin-right: 0.08rem;
            }
        }
    }
</style>
