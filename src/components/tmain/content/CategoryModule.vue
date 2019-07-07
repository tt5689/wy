<template>
    <div class="categorywrap">
        <div>
            <a>
                <img :src="mainTocaList.titlePicUrl"/>
            </a>
        </div>
        <ul>
            <li v-for="(item,index) in mainTocaList.itemList" :key="index">
                <a>
                    <img :src="item.showPicUrl"/>
                    <p>{{item.name}}</p>
                    <i>￥{{item.counterPrice}}</i><br/>
                    <span v-if="item.promTag">{{item.promTag}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
// import {categoryModule} from 'api/home/thome.js'
export default {
  props:['mainTocaList'],
  mounted() {
      console.log(this.mainTocaList);
  },
}
</script>

<style lang="scss" scoped>
    .categorywrap{
        min-height: 7.82rem;
        background: #fff;
        margin-bottom: .2rem;
        div{
            height: 3.7rem;
            a{
                display: block;
                height: 100%;
                img{
                    width: 100%;
                    height:100%;
                    background: #ccc;
                }
            }
        }
        ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow-x: scroll;
        padding-left: .3rem;
        li{
            width: 2.16rem;
            margin-left: .2rem;
            margin-top:.2rem;
            flex-shrink: 0;
            a{
                display: block;
                img{
                    width: 100%;
                    height: 2.14rem;
                    margin-bottom: .12rem;
                    background: #f4f4f4;
                }
                p{
                   font-size: .23rem;
                   line-height: .4rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    white-space: normal;
                }i{
                       color: #b4282d;
                   }
                span{
                    width: auto;
                    display: inline-block;
                    padding: 0 .12rem;
                    border: 1px solid #b4282d;
                    height: .28rem;
                    line-height: .28rem;
                    text-align: center;
                }
            }
        }
    }
    ul::-webkit-scrollbar{
        display: none;
    }
    }
</style>