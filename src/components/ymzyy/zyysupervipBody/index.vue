<template>
    <div>
    <div class="svMain">
        <div class="vipList">
            <i class="iconfont iconwenhao vipask"></i>
            <div class="vipmsg">
                    <span>开通超级会员</span>
                    <i class="iconfont iconhuiyuan viplogo"></i>
                    <span>专享9大权益</span>

            </div>
            <img class="vipimg" src="http://yanxuan.nosdn.127.net/12351482c5fc84f7fa7be329e6ec8f95.png">
            <ul class="vipNightico">
                <li v-for="(item,index) in zyyNavlist" :key="index">
                    <i class="iconfont iconche-tianchong"></i>
                    <span>{{item.simpleDesc}}</span>
                    <b>{{item.name}}</b>
                </li>
            </ul>
        </div>
        <div>
            <div class="buyVip">
                <span>开通超级会员预计年均可省</span>
                <b>￥2345</b>
                <i>&gt;</i>
            </div>
            <div class="buyingVip">
                <div class="buyingVipNow">
                    <span>立即开通￥149/年</span>
                    <i class="buyMom" v-text="zyysupervipList.openConfigDesc"></i>
                </div>
                <div class="buyingVipMoon">先试用30天</div>
            </div>
        </div>
            <div class="zyyvipscoll swiper-container" ref="vipsss">
                <ul class="scollVip swiper-wrapper">
                    <!-- <li class="scollViplist swiper-slide" v-for="(item,index) in zyyOpenGiftInfos" :key="index">
                        <img :src="item.picUrl">
                    </li> -->
                    <div class="swiper-slide scollViplist"><img src="https://yanxuan.nosdn.127.net/227dd09c76ed411a95f9d948c6c4320a.png?imageView&quality=65&thumbnail=690x120"></div>
                    <div class="swiper-slide scollViplist"><img src="https://yanxuan.nosdn.127.net/227dd09c76ed411a95f9d948c6c4320a.png?imageView&quality=65&thumbnail=690x120"></div>
                </ul>
                 <div class="swiper-pagination vipPage"></div>
            </div>
            
        <div class="img_two">
            <img src="https://yanxuan.nosdn.127.net/16602a11b02f925b8b47edf8d9e1b133.png?imageView&quality=65&thumbnail=690x160">
        </div>
        <div class="vipNight">
            <span></span>
            <i>严选超级会员9大权益</i>
            <span></span>
        </div>
        <div class="vipTry">
            <div class="vipTryO">
                <span v-text="zyyThreeclass.name"></span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT" v-text="zyyThreeclass.simpleDesc"></div>
        </div>
        <div class="vipTryList">
            <ul>
                <li class="vipTryListS" v-for="(item,index) in zyyModuleCommonItemList" :key="index">
                    <img :src="item.listPicUrl">
                    <span>{{item.name}}</span>
                    <div>
                        <i>￥{{item.primarySkuPreSellPrice}}</i>
                        <b>￥{{item.counterPrice}}</b>
                    </div>
                    <h3>立即领取</h3>
                </li>
            </ul>
        </div>
        <div class="svipPrice">
            <div class="vipPrice">
                <span v-text="zyyOneclass.name"></span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT" v-text="zyyOneclass.simpleDesc"></div>
        </div>
        <div class="svipPriceList">
            <ul>
                <li class="svipPriceListLi" v-for="(item,index) in zyyModuleCommon" :key="index">
                    <div class="svipPriceListLi_one">
                        <img :src="item.listPicUrl">
                        <em>{{item.subtractPriceDesc}}</em>
                    </div>
                    <div class="svipPriceListLi_two">{{item.name}}</div>
                    <div class="svipPriceListLi_three">
                        <b>￥{{item.retailPrice}}</b>
                        <i>￥{{item.counterPrice}}</i>
                    </div>
                </li>
            </ul>
        </div>

        <div class="vipTry">
            <div class="vipFastBuy">
                <span>{{zyyFourclass.name}}</span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT">{{zyyFourclass.simpleDesc}}</div>
        </div>
        
        <ul class="lastList">
            <li class="lastListS" v-for="(item,index) in zyyExclusiveCoupons" :key="index">
                <img src="http://yanxuan.nosdn.127.net/4edb1654af457e1a7d4f176032df479f.png">
                <div class="lastListR">
                    <div class="lastListRone">{{item.amount}}元</div>
                    <div class="lastListRtwo">
                        <span>{{item.name}}</span>
                        <i>{{item.rangeName}}</i>
                    </div>
                </div>
            </li>
        </ul>
        <div class="zyyGetnow"><span>立即领取&gt;</span></div>
        <div class="borderBox"></div>
        <div class="vipTry">
            <div class="vipFastBuy">
                <span>专属免邮券</span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT">每月发放3张专属免邮券，全年价值360元</div>
        </div>
        <div class="bottomOne">
            <img src="https://yanxuan.nosdn.127.net/e4c0feaeef91ec35910c63614001e472.png?imageView&quality=65&thumbnail=690x0">
        </div>

        <div class="borderBox"></div>

        <div class="vipTry">
            <div class="vipFastBuy">
                <span v-text="zyySixclass.name"></span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT" v-text="zyySixclass.simpleDesc"></div>
        </div>
        
        
        <div class="bottomTwo">
            <img :src="zyySixclass.modulePicUrl">
        </div>
        <div class="bottomLast">
            更多超级会员专属权益，敬请期待
        </div>
    </div>
        <div class="buyingVipNowTwo">
            <span>立即开通￥149/年</span>
            <i class="buyMom" v-text="zyysupervipList.openConfigDesc"></i>
        </div>
    </div>
</template>

<script>
import {gteZyysuper} from "api/zyysupervip"
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
    name:"ZyysupervipBody",
    // await要在anync里用，anync代表异步,代表当前函数是异步函数
    async created() {
        let data = await gteZyysuper();
        this.zyysupervipList = data.data;
        this.zyyOpenGiftInfos = this.zyysupervipList.openGiftInfos;
        this.zyyPrivilegeModuleMap = this.zyysupervipList.privilegeModuleMap;
        // this.zyyPrivilegeList = this,zyysupervipList.privilegeList;
        this.zyyOneclass = this.zyyPrivilegeModuleMap[101];
        this.zyyThreeclass = this.zyyPrivilegeModuleMap[103];
        this.zyyModuleCommonItemList = this.zyyPrivilegeModuleMap[103].moduleCommonItemList;
        this.zyyModuleCommon = this.zyyPrivilegeModuleMap[101].moduleCommonItemList;
        this.zyyExclusiveCoupons = this.zyyPrivilegeModuleMap[104].exclusiveCoupons;
        this.zyySixclass = this.zyyPrivilegeModuleMap[106];
        this.zyyFourclass = this.zyyPrivilegeModuleMap[104];
        this.zyyNavlist = this.zyysupervipList.memInfo.privilegeList;
        // console.log(this.zyyNavlist);
    },
    data() {
        return {
            zyyNavlist:[],
            zyysupervipList:[],
            zyyOpenGiftInfos:[],
            zyyPrivilegeModuleMap:[],
            zyyModuleCommonItemList:[],
            zyyModuleCommon:[],
            zyyExclusiveCoupons:[],
            zyySixclass:[],
            zyyThreeclass:[],
            zyyOneclass:[],
            zyyFourclass:[]
        }
    },
     mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop : true,
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
        autoplay: {
                disableOnInteraction: true,
            },
        })
    },

}
</script>

<style>
    .svMain {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        flex: 1;
        margin-top: .88rem;
        background-color: #fff;
        min-height:8rem;
        overflow-y: hidden;
    }
    .svBgimg {
        width: 100%;
        height: 100%;
    }
    .vipList {
        width: 100%;
        height: 7.74rem;
        display: flex;
        flex-direction: column;
    }
    .vipask {
        position: absolute;
        font-size: .36rem;
        color: #8b8b8b;
        right: .36rem;
        top: 1.1rem;
    }
    .vipmsg {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: .6rem;
        top: 1.4rem;
    }
    .vipimg {
        width: 100%;
        height: 100%;
    }
    .vipmsg span {
        font-size: .35rem;
        color: #fff;
    }
    .viplogo {
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: .6rem;
        color: #dac49b;
    }  
    .vipNightico {
        padding-left: .65rem;
        position: absolute;
        width: 6.85rem;
        height: 4.14rem;
        top: 2.8rem;
    }
    .vipNightico>li {
        float: left;
        width: 2.1rem;
        height: 1.7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .vipNightico>li>i {
        display: block;
        width: .8rem;
        height: .8rem;
        background-color: #dac49b;
        border-radius: 50%;
        color: #3a3a39;
        font-size: .36rem;
        text-align: center;
        line-height: .83rem;
    }
    .vipNightico>li>span {
        display: inline-block;
        height: .4rem;
        line-height: .4rem;
        color: #dbc4ad;
        font-size: .16rem;
    }
    .vipNightico>li>b {
        color: #7f7f7f;
        font-size: .14rem;
    }
    .buyVip {
        display: flex;
        justify-content: center;
        width: 100%;
        height: .64rem;
    }
    .buyVip span {
        color: #333333;
        font-size: .12rem;
    }
    .buyVip b {
        color: #bea36e;
        font-size: .16rem;
        font-weight: 900;
    }
    .buyingVip {
        width: 100%;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .buyingVipNow {
        background-color: #efe0be;
        width: 6.9rem;
        height: .9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .buyingVipNow>span {
        font-size: .26rem;
        color: #4d3a12;
        font-weight: 900;
    }
    .buyingVipNow, .buyMom {
        font-size: .06rem;
        color: #4d3a12;
    }
    .buyingVipMoon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 6.85rem;
        height: .85rem;
        border: 1px solid #b3aa99;
        font-size: .26rem;
        font-weight: 900;
        color: #4d3a12;
    }
    ::-webkit-scrollbar {display:none} 
    .zyyvipscoll {
        width: 100%;
        height: 1.8rem;
        margin-top: .2rem;
        margin-left: .22rem;
        /* display: flex;
        justify-content: center;
        align-items: center; */
    }
    .scollVip {
        width: 6.9rem;
        height: 100%;
        /* display: flex;
        overflow-x: auto; */
    }
    .scollViplist {
        width: 6.9rem;
        height: 1.4rem;
    }
    .scollViplist :nth-child(2) {
        margin-left: .2rem
    }
    .scollViplist img {
        width: 6.9rem;
        height: 100%;
    }
    .vipPage {
        position: absolute;
        top: 1.5rem;
        left: 45%;
    }
    .img_two {
        width: 6.9rem;
        height: 1.6rem;
        margin: .2rem 0;
    }
    .img_two img {
        width: 100%;
        height: 100%;
    }
    .vipNight {
        display: flex;
        align-items: center;
        justify-content: center;    
        width: 7.5rem;
        height: 1.1rem;
        background-color: #f4f4f4;
    }
    .vipNight i {
        font-size: .22rem;
        color: #333;
    }
    .vipNight>span {
        height: .06rem;
        width: .8rem;
        background-color: #ede8df;
        margin: 0 .5rem;
    }
    .vipTry, .svipPrice {
        width: 100%;
        height: 1.89rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .vipTryO, .vipPrice, .vipFastBuy {
        width: 100%;
        display: flex;
        justify-content: space-between; 
        align-items: center;
    }
    .vipTryO span, .vipPrice span, .vipFastBuy span {
        display: inline-block;
        margin-left: .2rem;
        font-size: .36rem;
        height: .64rem;
        font-weight: 700;
        color: #2A2315;
    }
    .vipTryO i, .vipPrice i, .vipFastBuy i {
        font-size: .16rem;
        color: #3B3324;
        margin-right: .2rem;
    }
    .vipTryT {
        margin-left: .2rem;
        font-size: .16rem;
        color: #7F7F7F;
    }
    .vipTryList {
        height: 5.3rem;
        width: 100%;
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: flex-start; */
        border-bottom: .2rem solid #eee;
        overflow-x: auto;
    }
    .vipTryList ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        align-items: center;
        
    }
    .vipTryListS {
        height: 100%;
        width: 2.8rem;
        margin-left: .2rem;
        padding-right: .2rem;
    }
    .vipTryListS img {
        background-color: #f4f4f4;
        width: 2.8rem;
        height: 2.8rem;
    }
    .vipTryListS span {
        display: inline-block;
        width: 2.8rem;
        height: 1rem;
    font-size: .28rem;
        color: #666;
    }
    .vipTryListS div {
        margin-top: .1rem;
        width: 2.8rem;
        height: .4rem;
        display: flex;
        justify-content: flex-start;
    }
    .vipTryListS div i{
        color: #b42b2d;
        font-size: .14rem;
    }
    .vipTryListS div b {
        color: #c5c5c5;
        font-size: .14rem;
    }
    .vipTryListS h3 {
        margin-top: .1rem;
        background-color: #C9B489;
        width: 100%;
        height: .56rem;
        line-height: .56rem;
        text-align: center;
        color: #fff;
    }
    .svipPriceList {
        width: 100%;
        height: 6.3rem;
        border-bottom: .2rem solid #eee;
    }
    .svipPriceList ul {
        width: 100%;
        height: 3.1rem;
    }
    .svipPriceListLi {
        margin-left: .24rem;
        overflow-x: hidden;
        width: 2.16rem;
        height: 100%;
        float: left;
    }
    .svipPriceListLi_one {
        position: relative;
        width: 100%;
        height: 2.16rem;
    }
    .svipPriceListLi_one img {
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
    .svipPriceListLi_one em {
        width: 1.1rem;
        height: .28rem;
        line-height: .27rem;
        font-size: .1rem;
        white-space: nowrap;
        color: #fff;
        background-color: #c9ab6f;
        position: absolute;
        top: .2rem;
        left: 0;
        border-radius: 0 5px 5px 0;
    }
    .svipPriceListLi_two {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 2.16rem;
        height: .36rem;
        line-height: .36rem;
        font-size: .16rem;
        white-space: nowrap;
        color: #333;
    }
    .svipPriceListLi_three {
        display: flex;
        justify-content: flex-start;
        width: 2.16rem;
        height: .42rem;
    }
    .svipPriceListLi_three>b {
        font-weight: 800;
        color: #333;
        font-size: .16rem;
    }
    .svipPriceListLi_three>i {
        color: #7f7f7f;
        font-size: .12rem;
        text-decoration:line-through;
    }
    .lastList {
        width: 7.5rem;
        height: 3rem;
        overflow-x: auto;
        overflow-y: hidden;
        margin: 0 .2rem;
        display: flex;
        position: relative;
    }
    .lastListS {
        padding-right: .2rem;
        width: 6rem;
        height: 3rem;
        margin-left: .2rem;
    }
    .lastListS img {
        display: block;
        /* width: 100%; */
        height: 80%;
    }
    .lastListR {
        width: 4.66rem;
        height: 2.8rem;
        display: flex;
        justify-content: space-around;
        position: absolute;
        top: .95rem;
        margin-left: .75rem;

    }
    .lastListRone {
        width: 2rem;
        height: 1rem;
        font-size: .4rem;
        color: #2A2315;
    }
    .lastListRtwo {
        height: 6rem;
        width: 4rem;
        font-size: .24rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0.9rem;
    }
    .lastListRtwo span {
        text-align: center;
        width: 100%;
        font-size: .28rem;
        color: #2A2315
    }
    .lastListRtwo i {
        display: block;
        text-overflow: ellipsis;
        width: 2.5rem;
        color: #dbc59f;
        text-align: center;
        overflow: hidden;
        height: 3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .zyyGetnow {
        display: flex;
        justify-content: center;
        width: 100%;
        height: .9rem;
    }
    .zyyGetnow span {
        text-align: center;
        font-size: .28rem;
        color: #dbc59f;
    }
    .bottomOne {
        width: 6.9rem;
        height: 3.5rem;
    }
    .bottomOne img {
        width: 100%;
        height: 3rem;
    }
    .bottomTwo {
        width: 6.9rem;
        height: 3.5rem;
    }
    .bottomTwo img {
        width: 100%;
        height: 3rem;
    }
    .borderBox {
        border-bottom: .2rem solid #eee;
        width: 100%;
    }
    .bottomLast {
        background-color: #eee;;
        width: 100%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: .24rem;
        color: #666;
    }
    .buyingVipNowTwo {
        background-color: #efe0be;
        width: 100%;
        height: .9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .buyingVipNowTwo>span {
        font-size: .26rem;
        color: #4d3a12;
        font-weight: 900;
    }
    .buyingVipNowTwo, .buyMom {
        font-size: .06rem;
        color: #4d3a12;
    }
</style>
