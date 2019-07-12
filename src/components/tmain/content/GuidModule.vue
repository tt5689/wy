<template>
    <div class="guidM_wwrap">
        <ul>
            <li v-for="(item,index) in axData" :key="index">
                <a>
                    <p>{{item.title}}</p>
                    <span>{{item.desc}}</span>
                    <div class="imgS">
                        <img v-for="(it,index1) in item.picUrlList" :key="index1" :src="it"/>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
// import {sceneLightShoppingGuideModule} from 'api/home/thome.js'
import Json from 'api/json/home.js'
export default {
    async mounted() {
        // let dt =  await sceneLightShoppingGuideModule();
        let dt = Json.sceneLightShoppingGuideModule;
        dt.forEach(element => {
            var obj = {};
            obj.title = element.styleItem.title;
            obj.desc = element.styleItem.desc;
            obj.picUrlList = element.styleItem.picUrlList;
            this.axData.push(obj);
        });
    },
    data() {
        return {
            axData:[]
        }
    },
}
</script>
<style lang="scss" scoped>
.guidM_wwrap{
    min-height: 5.76rem;
    background: #fff;
    margin-bottom: .2rem;
    padding: .1rem .3rem 0;
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: flex-start;
        li{
            width: 3.44rem;
            height: 2.64rem;
            background: #f5f5f5;
            margin-bottom: .04rem;
            a{
                display: block;
                padding: .24rem 0 0  .3rem;
                p{
                    font-size: .32rem;
                    color: #333;
                    line-height: .42rem;
                }
                span{
                    display: block;
                    line-height: .36rem;
                    color: #7f7f7f;
                }
                .imgS{
                    width: 100%;
                    img{
                        width: 48%;
                        height: 1.5rem;
                    }
                }
            }
        }
    }
}
</style>

