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
                <li>
                    <i class="iconfont iconche-tianchong"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
                </li>
                <li>
                    <i class="iconfont iconzhekou"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
                </li>
                <li>
                    <i class="iconfont icongouwudai"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
                </li>
                <li>
                    <i class="iconfont icon-shiyong"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
                </li>
                <li>
                    <i class="iconfont iconjipiao"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
                </li>
                <li>
                    <i class="iconfont iconbaifenhao"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
                </li>
                <li>
                    <i class="iconfont iconrenminbicaiwuzhifu"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
                </li>
                <li>
                    <i class="iconfont icondunpaisuo"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
                </li>
                <li>
                    <i class="iconfont iconiconfontunie62c"></i>
                    <span>36张/年</span>
                    <b>每月免邮卷</b>
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
        <div class="img_one">
            <div class="img_oneL">
                <img src="https://yanxuan.nosdn.127.net/227dd09c76ed411a95f9d948c6c4320a.png?imageView&quality=65&thumbnail=690x120">
            </div>
            <div class="img_oneR">
                <img src="https://yanxuan.nosdn.127.net/a81dd3d443be10cd7d49bdb933869d0d.png?imageView&quality=65&thumbnail=690x120">
            </div>
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
                <span>免费试用</span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT">每月上新，免费领1件，全年最多可领12件</div>
        </div>
        <div class="vipTryList">
            <ul>
                <li class="vipTryListS">
                    <img src="https://yanxuan.nosdn.127.net/7988cb4d08a51a8f7dc183f4787c2302.png?imageView&quality=65&thumbnail=330x330">
                    <span>降温贴（儿童款）</span>
                    <div>
                        <i>￥0</i>
                        <b>￥35</b>
                    </div>
                    <h3>立即领取</h3>
                </li>
                <li class="vipTryListS">
                    <img src="https://yanxuan.nosdn.127.net/7988cb4d08a51a8f7dc183f4787c2302.png?imageView&quality=65&thumbnail=330x330">
                    <span>降温贴（儿童款）</span>
                    <div>
                        <i>￥0</i>
                        <b>￥35</b>
                    </div>
                    <h3>立即领取</h3>
                </li>
                <li class="vipTryListS">
                    <img src="https://yanxuan.nosdn.127.net/7988cb4d08a51a8f7dc183f4787c2302.png?imageView&quality=65&thumbnail=330x330">
                    <span>降温贴（儿童款）</span>
                    <div>
                        <i>￥0</i>
                        <b>￥35</b>
                    </div>
                    <h3>立即领取</h3>
                </li>
                <li class="vipTryListS">
                    <img src="https://yanxuan.nosdn.127.net/7988cb4d08a51a8f7dc183f4787c2302.png?imageView&quality=65&thumbnail=330x330">
                    <span>降温贴（儿童款）</span>
                    <div>
                        <i>￥0</i>
                        <b>￥35</b>
                    </div>
                    <h3>立即领取</h3>
                </li>
            </ul>
        </div>
        <div class="svipPrice">
            <div class="vipPrice">
                <span>超级会员价</span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT">95折起专享价，可叠加券和红包</div>
        </div>
        <div class="svipPriceList">
            <ul>
                <li class="svipPriceListLi">
                    <div class="svipPriceListLi_one">
                        <img src="https://yanxuan.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&thumbnail=216x216&quality=85">
                        <em>省￥21.4</em>
                    </div>
                    <div class="svipPriceListLi_two">24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                    <div class="svipPriceListLi_three">
                        <b>￥407.6</b>
                        <i>￥429</i>
                    </div>
                </li>
                <li class="svipPriceListLi">
                    <div class="svipPriceListLi_one">
                        <img src="https://yanxuan.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&thumbnail=216x216&quality=85">
                        <em>省￥21.4</em>
                    </div>
                    <div class="svipPriceListLi_two">24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                    <div class="svipPriceListLi_three">
                        <b>￥407.6</b>
                        <i>￥429</i>
                    </div>
                </li>
                <li class="svipPriceListLi">
                    <div class="svipPriceListLi_one">
                        <img src="https://yanxuan.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&thumbnail=216x216&quality=85">
                        <em>省￥21.4</em>
                    </div>
                    <div class="svipPriceListLi_two">24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                    <div class="svipPriceListLi_three">
                        <b>￥407.6</b>
                        <i>￥429</i>
                    </div>
                </li>
                <li class="svipPriceListLi">
                    <div class="svipPriceListLi_one">
                        <img src="https://yanxuan.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&thumbnail=216x216&quality=85">
                        <em>省￥21.4</em>
                    </div>
                    <div class="svipPriceListLi_two">24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                    <div class="svipPriceListLi_three">
                        <b>￥407.6</b>
                        <i>￥429</i>
                    </div>
                </li>
                <li class="svipPriceListLi">
                    <div class="svipPriceListLi_one">
                        <img src="https://yanxuan.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&thumbnail=216x216&quality=85">
                        <em>省￥21.4</em>
                    </div>
                    <div class="svipPriceListLi_two">24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                    <div class="svipPriceListLi_three">
                        <b>￥407.6</b>
                        <i>￥429</i>
                    </div>
                </li>
                <li class="svipPriceListLi">
                    <div class="svipPriceListLi_one">
                        <img src="https://yanxuan.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&thumbnail=216x216&quality=85">
                        <em>省￥21.4</em>
                    </div>
                    <div class="svipPriceListLi_two">24寸 纯PC“铝框”（非全铝）拉杆箱</div>
                    <div class="svipPriceListLi_three">
                        <b>￥407.6</b>
                        <i>￥429</i>
                    </div>
                </li>
            </ul>
        </div>

        <div class="vipTry">
            <div class="vipFastBuy">
                <span>超级闪购</span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT">限时限量低价购，每天0点更新</div>
        </div>
        
        <ul class="lastList">
            <li>
                <img src="https://yanxuan.nosdn.127.net/fddaa18690fa0b53d2d59ab7bd26b8f9.png">
                <div class="lastListR">
                    <h3>专项7.6折</h3>
                    <span>限时限量低价购，每天0点更新</span>
                    <div class="lastListRone">
                        <i>￥189</i>
                        <b>￥249</b>
                    </div>
                    <div class="lastListRtwo">
                        <i>仅剩62件</i>
                        <span>立即抢购</span>
                    </div>
                </div>
            </li>
            <li>
                <img src="https://yanxuan.nosdn.127.net/fddaa18690fa0b53d2d59ab7bd26b8f9.png">
                <div class="lastListR">
                    <h3>专项7.6折</h3>
                    <span>限时限量低价购，每天0点更新</span>
                    <div class="lastListRone">
                        <i>￥189</i>
                        <b>￥249</b>
                    </div>
                    <div class="lastListRtwo">
                        <i>仅剩62件</i>
                        <span>立即抢购</span>
                    </div>
                </div>
            </li>
            <li>
                <img src="https://yanxuan.nosdn.127.net/fddaa18690fa0b53d2d59ab7bd26b8f9.png">
                <div class="lastListR">
                    <h3>专项7.6折</h3>
                    <span>限时限量低价购，每天0点更新</span>
                    <div class="lastListRone">
                        <i>￥189</i>
                        <b>￥249</b>
                    </div>
                    <div class="lastListRtwo">
                        <i>仅剩62件</i>
                        <span>立即抢购</span>
                    </div>
                </div>
            </li>
            <li>
                <img src="https://yanxuan.nosdn.127.net/fddaa18690fa0b53d2d59ab7bd26b8f9.png">
                <div class="lastListR">
                    <h3>专项7.6折</h3>
                    <span>限时限量低价购，每天0点更新</span>
                    <div class="lastListRone">
                        <i>￥189</i>
                        <b>￥249</b>
                    </div>
                    <div class="lastListRtwo">
                        <i>仅剩62件</i>
                        <span>立即抢购</span>
                    </div>
                </div>
            </li>
            <li>
                <img src="https://yanxuan.nosdn.127.net/fddaa18690fa0b53d2d59ab7bd26b8f9.png">
                <div class="lastListR">
                    <h3>专项7.6折</h3>
                    <span>限时限量低价购，每天0点更新</span>
                    <div class="lastListRone">
                        <i>￥189</i>
                        <b>￥249</b>
                    </div>
                    <div class="lastListRtwo">
                        <i>仅剩62件</i>
                        <span>立即抢购</span>
                    </div>
                </div>
            </li>
            <li>
                <img src="https://yanxuan.nosdn.127.net/fddaa18690fa0b53d2d59ab7bd26b8f9.png">
                <div class="lastListR">
                    <h3>专项7.6折</h3>
                    <span>限时限量低价购，每天0点更新</span>
                    <div class="lastListRone">
                        <i>￥189</i>
                        <b>￥249</b>
                    </div>
                    <div class="lastListRtwo">
                        <i>仅剩62件</i>
                        <span>立即抢购</span>
                    </div>
                </div>
            </li>
        </ul>

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
        
        <div class="vipTry">
            <div class="vipFastBuy">
                <span>双倍积分</span>
                <i>权益详情&gt;</i>
            </div>
            <div class="vipTryT">超级会员购物双倍返积分，积分可兑好礼</div>
        </div>
        <div class="borderBox"></div>
        <div class="bottomTwo">
            <img src="https://yanxuan.nosdn.127.net/7aed7527f37167c0800c75ab76fb7004.png?imageView&quality=65&thumbnail=690x0">
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
export default {
    name:"ZyysupervipBody",
    // await要在anync里用，anync代表异步,代表当前函数是异步函数
    async created() {
        let data = await gteZyysuper();
        this.zyysupervipList = data.data;        
    },
    data() {
        return {
            zyysupervipList:[],
        }
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
    .img_one {
        width: 100%;
        height: 1.1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-x: auto;
        overflow-y: hidden;
        margin-top: .5rem;
    }
    ::-webkit-scrollbar {display:none} 
    .img_oneL {
        width: 100%;
        height: 100%; 
        margin-left: .3rem;  
    }
    .img_oneR {
        margin-left: .5rem;
        padding-right: .35rem;
        width: 100%;
        height: 100%;   
    }
    .img_oneL img {
        width: 6.9rem;
        height: 100%;   
    }
    .img_oneR img {
        width: 6.9rem;
        height: 100%;
    }
    .img_two {
        width: 6.9rem;
        height: 1.6rem;
        margin: .5rem 0;
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
        height: 4.52rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-bottom: .2rem solid #eee;
    }
    .vipTryList ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between  ;
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
        height: 7.1rem;
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
        line-height: .28rem;
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
        width: 100%;
        min-height: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: .2rem solid #eee;
    }
    .lastList li {
        width: 6.9rem;
        height: 3.1rem;
        display: flex;
    }
    .lastList li img {
        background-color: #f4f4f4;;
        width: 2.8rem;
        height: 2.8rem;
    }
    .lastListR {
        margin-left: .2rem;
        width: 3.66rem;
        height: 2.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .lastListR h3 {
        height: .3rem;
        width: 1.4rem;
        font-size: .24rem;
        background-color: #5f5034;
        color: #dcccac;
        text-align: center;
        line-height: .3rem;
    }
    .lastListR span {
        height: .3rem;
        width: 100%;
        font-size: .24rem;
    }
    .lastListRone {
        display: flex;
        height: .4rem;
        width: 100%;
    }
    .lastListRone i {
        color: #b9383d;
        width: .7rem;
    }
    .lastListRone b {
        width: .7rem;
        color: #7f7f7f;
        text-decoration:line-through;
    }
    .lastListRtwo {
        display: flex;
        justify-content: space-between;
        height: .4rem;
        width: 100%;
        align-items: center;
    }
    .lastListRtwo i {
        height: 0.3rem;
        line-height: .3rem;
        width: 1.2rem;
        border: 1px solid #dbc59f;
        color: #dbc59f;
        text-align: center; 
        border-radius: .1rem;
    }
    .lastListRtwo span {
        height: .58rem;
        width: 1.4rem;
        background-color: #dbc59f;
        color: #fff;
        font-size: .28rem;
        text-align: center;
        line-height: .58rem;
    }
    .bottomOne {
        width: 6.9rem;
        height: 3rem;
    }
    .bottomOne img {
        width: 100%;
        height: 100%;
    }
    .bottomTwo {
        width: 6.9rem;
        height: 3rem;
    }
    .bottomTwo img {
        width: 100%;
        height: 100%;
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
