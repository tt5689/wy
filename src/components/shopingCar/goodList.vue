<template>
    <ul class="cartGroupList">
            <li class="gItem" v-for="(item,index) in dataList" :key="index" @change="handerChangeToggle(index)">
                <input type="checkbox" :checked="item.flag"/>
                <img :src="item.showPicUrl"/>
                <div class="goodInfor">
                    <p>{{item.name}}</p>
                    <span>{{item.simpleDesc}}</span>
                    <strong>￥{{item.retailPrice}}</strong>
                </div>
                <div class="m-selnum">
                    <button @click="handlerReduce(index)">-</button>
                    <input type="text" :value="item.num" @input="handlerInput({index,e:$event})"/>
                    <button @click="handlerAdd(index)">+</button>
                </div>
            </li>
        </ul>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState({
            dataList:state=>state.car.goodsList
        })
    },
    updated() {
        console.log(this.dataList);
    },
    methods: {
        ...mapMutations({
            handerChangeToggle:"car/handerChangeToggle",
            handlerReduce:"car/handlerReduce",
            handlerAdd:"car/handlerAdd",
            handlerInput:"car/handlerInput"
        })
    },
}
</script>


<style>
.gItem{
    height: 2.2rem;
    margin-bottom: .2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #fff;
    padding: 0 .3rem;
    position: relative;
}
.checkOut{
    display: inline-block;
    width: .38rem;
    height: .38rem;
}
.gItem img{
    margin-left: .2rem;
    margin-right: .2rem;
    border-radius: 4px;
    width: 1.72rem;
    height: 1.72rem;
    overflow: hidden;
    background-color: #eee;
}
.goodInfor{
    width: 4.2rem;
}
.goodInfor p{
    max-height: .96rem;
    line-height: .48rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.goodInfor span{
    display: block;
    max-width: 4.34667rem;
    color: #7F7F7F;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.goodInfor strong{
    font-size: .37333rem;
    line-height: .53333rem;
    width: 3rem;
}
.m-selnum{
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
    bottom: 0.2rem;
    padding-top: .02667rem;
    width: 2.37333rem;
    height: .54rem;
    background-origin: content-box;
}
.m-selnum input{
    width: 1rem;
    height: .54rem;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
}
</style>
