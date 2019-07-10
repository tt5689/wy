<template>
  <div class="hotsalesMain">
    <!-- 背景图 -->
    <div class="rxBanner">
      <img src="https://yanxuan.nosdn.127.net/e51d574a2970d2f423477fd85deb128a.png" />
      <div class="rxBannerTense">
        <span>欢迎来到网易严选</span>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="rxnav">
      <div class="rxnavNetx">
        <div class="navAll" v-if="!flage">
          <span class="navAll1">全部类目</span>
          <ul class="navAll2">
            <li
              class="rxnavNetxList1"
              v-for="(item,index) in navList"
              :key="index"
              @click="navListtab(index)"
              :class="rxnavIndex == index?'navactive':''"
            >{{item}}</li>
          </ul>
        </div>
        <ul class="navul" v-if="flage">
          <li
            class="rxnavNetxList"
            v-for="(item,index) in navList"
            :key="index"
            @click="navListtab(index)"
            :class="rxnavIndex == index?'navactive':''"
          >{{item}}</li>
        </ul>
        <div class="navDown" @click="handleNavDown()">
          <i class="iconfont iconxiala" :class="flage?'navDownI1':'navDownI2'"></i>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="rxmain">
        <ul>
            <li class="rxmainList" v-for="(item,index) in zyyhotsalesList" :key="index">
                <div class="listTop">
                    <img
                    class="listIMG"
                    :src="item.listPicUrl"
                    />
                    <div class="topRight">
                    <div class="topRightOne" v-show="item.couponAvaliable"></div>
                    <div class="topRightTwo">{{item.name}}</div>
                    <div class="topRightThree">{{item.goodCmtRate}}好评率</div>
                    <div class="topRightPrice">
                        <span>￥{{item.retailPrice}}</span>
                        <i>￥{{item.counterPrice}}</i>
                        <em>马上抢</em>
                    </div>
                    </div>
                </div>
                <div class="listBottom">
                    <span>{{item.simpleDesc}}</span>
                </div>
            </li>
        </ul>
      <div class="mainMore">
        <h2 class="moreTitle">更多榜单</h2>
        <ul class="moreList">
          <li v-for="(item,index) in moretwo" :style="item.bgcs" :key="index">
            <div class="moreListLeft">
              <span>{{item.titles}}</span>
              <i>进入榜单&gt;</i>
            </div>
            <img :src="item.imgss" class="moreListRight"/>
          </li>
        </ul>
      </div>
    </div>

    <!-- end -->
  </div>
</template>

<script>
import {gteZyyhotsales} from "api/zyyhotsales"
export default {
    name:"zyyhotsalesBody",
    // await要在anync里用，anync代表异步,代表当前函数是异步函数
    async created() {
        let data = await gteZyyhotsales();
        this.zyyhotsalesList = data.data
         
    },
    data() {
        return {
            zyyhotsalesList:[],
            navList:["全部","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行"], 
            flage:'ture',
            rxnavIndex:0,
            moretwo:[
                {   imgss:"https://yanxuan.nosdn.127.net/b4949f469d564ab34e69ebc45a6233ec.png",
                    bgcs:{backgroundColor:"#f1f8fd"},
                    titles:"居家生活榜"
                },
                {   imgss:"https://yanxuan.nosdn.127.net/ce4e606b4ddd2edebf57f63b56256813.png",
                    bgcs:{backgroundColor:"#f3f8ee"},
                    titles:"服饰鞋包榜"
                },
                {   imgss:"https://yanxuan.nosdn.127.net/9dd811d3b258d9a1ef6a84254a0da18e.png",
                    bgcs:{backgroundColor:"#fdf3ea"},
                    titles:"美食酒水榜"
                },
                {   imgss:"https://yanxuan.nosdn.127.net/8f3798ffdabcacb525bc5dfa88bd4b4e.png",
                    bgcs:{backgroundColor:"#fff6e5"},
                    titles:"个人清洁榜"
                },
                {   imgss:"https://yanxuan.nosdn.127.net/2f0620f2f41555d24b2645d4bcff451e.png",
                    bgcs:{backgroundColor:"#f4f9fd"},
                    titles:"母婴亲子榜"
                },
                {   imgss:"https://yanxuan.nosdn.127.net/17c904bff54e6e550c6d24632e1acd8d.png",
                    bgcs:{backgroundColor:"#f3f8ee"},
                    titles:"运动旅行榜"
                },
                {   imgss:"https://yanxuan.nosdn.127.net/aa1ec3b84c88e959df8dcc4588d002ed.png",
                    bgcs:{backgroundColor:"#f1f8fd"},
                    titles:"数码家电榜"
                },
                {   imgss:"https://yanxuan.nosdn.127.net/6f3c97245dde19b9017a04045128ca7e.png",
                    bgcs:{backgroundColor:"#f3f8ee"},
                    titles:"全球特色榜"
                },
            ]
        }
    },
    methods: {
        navListtab(index) {
            this.rxnavIndex = index;                
        },
        handleNavDown() {                
            this.flage = !this.flage;   
        }
    },
}
</script>

<style scope>
    .hotsalesMain {
        background-color: #eee;
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        min-height: 5rem;
        }
    .rxBanner {
        width: 100%;
        position: absolute;
        margin-top: .88rem;
    }
    .rxBanner img {
        width: 100%;
    }
    .rxBannerTense {
        border-radius: .2rem;
        width: 2.73rem;
        height: .4rem;
        background-color: #cc3339;
        opacity: 0.7;
        display: flex;
        justify-content: center;
        position: absolute;
        top:45%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .rxBannerTense span {
        color: #fff;
        width: 2rem;
        height: 100%;
        line-height: .4rem;
        opacity: 1;
        font-size: .12rem;
        text-align: center;
    }
/* 导航 */
     .rxnav {
        width: 100%;
        height: 1rem;
        display: flex;
        position: absolute;
        top: 3.9rem;
        justify-content: center;    
    }
    .navAll {
        float: left;
        width: 6.1rem;
        height: 1rem;
    }
    .rxnavNetx {
        width: 7.1rem;
        height: 100%;
        background-color: #fff;
        border-radius: .2rem .2rem 0 0;
    }
    .navAll1 {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        color: #333;
        font-size: .3rem;
        margin-left: .3rem
    }
    .navul {
        float: left;
        width: 6rem;
        margin-left: .1rem;
        height: 100%;
        display: flex;
        align-items: center;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .navAll2 {
        width: 7.1rem;
        height: 2.48rem;
        background-color: #fff;
        position:absolute;
        z-index: 10;
        top: .9rem;
        border-top: 1px solid #dfdfe0;
        border-radius:  0 0 .2rem .2rem;
        box-shadow: 0 7px 5px -5px;
    }
    .rxnavNetxList1 {
        display: inline-block;
        color: #454545;
        font-size: .26rem;
        min-width: 1.4rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        margin-top: .4rem;
        margin-left: .2rem;
        border: 1px solid #bbb;
        border-radius: .2rem;
    }
    .rxnavNetxList {
        display: inline-block;
        color: #454545;
        font-size: .26rem;
        min-width: 1.4rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        flex: 0 0 auto;
        box-sizing: border-box;
        margin-left: .2rem;
    }
    .navDown {
        float: left;
        width: 1rem;
        height: 100%;
        background-color: #fff;
        opacity: 0.5;
        border-radius: 0 .2rem 0 0;
        text-align: center;
        line-height: 1rem;
    }
    .navDownI1 {
        display: block;
        width: 100%;
        height: 100%;
        transition: all 1s;
    }
     .navDownI2 {
         display: block;
        width: 100%;
        height: 100%;
        transform:rotate(180deg);
        transition: all 1s;
    }
    /* 隐藏滚动条 */
    ::-webkit-scrollbar {display:none} 
    .navactive {
        background-color: #e02e35;
        border-radius: .2rem;
        color: #fff;
    }
    /* 主体 */
       .rxmain {
            width: 7.1rem;
                margin: 4.8rem auto 0;
            min-height: 1rem;
            display: flex;
            flex-direction:column;
            align-items: center;
            background-color: #eee;
            z-index: 5;
        }
        .rxmainList {
            box-sizing: border-box;
            height: 3.84rem;
            width: 7.1rem;
            background-color: #fff;
            border-top: 1px solid #dfdfe0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
        .listTop {
            display: flex;
            height: 2.4rem;
        }
        .listIMG {
            width: 2.4rem;
            height: 2.4rem;
        }
        .topRight {
            width: 4.06rem;
            height: 2.4rem;
            margin-left: .2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
        }
        .topRightOne {
            height: .3rem;
            line-height: .3rem;
            font-size: .14rem;
            width: 100%;
            color: #b4282d;
            border: 1px solid #b4282d;
            text-align: center;
        }
        .topRightTwo {
            height: .96rem;
            line-height: .48rem;
            width: 3.6rem;
            font-size: .3rem;
            color: #333;
        }
        .topRightThree {
            height: .39rem;
            line-height: .39rem;
            width: 3.6rem;
            color: #333;
        }
        .topRightPrice {
            width: 4.06rem;
            height: .5rem;
            line-height: .5rem;
        }
        .topRightPrice span {
            color: #DD1A21;
            font-size: .32rem;
            float: left;
            width: 1.2rem;
            height: .3rem;
            text-align: center;
            line-height: .3rem;
        }
        .topRightPrice i {
            line-height: .4rem;
            width: 1rem;
            height: .3rem;
            float: left;
            color: #999999;
            font-size: .24rem;
            text-decoration:line-through
        }
        .topRightPrice em {
            float: right;
            text-align: center;
            line-height: .43rem; 
            background-color: #e03636;
            height: .43rem;
            width: 1.04rem;
            color: #fff;
            border-radius: .2rem;
        }
        .listBottom {
            width: 6.58rem;
            height: .6rem;
            background-color: #f6f6f6;
            border-radius: .5rem;
            display: flex;
            justify-content: center;
            overflow-x: auto;
            overflow-y: hidden;
        }
        .listBottom span {
            line-height: .6rem;
            color: #333;
            font-size: .28rem;
            padding: 0 .3rem;
        }
        .mainMore {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            min-height: .5rem;
            margin-top: .2rem;
        }
        .moreTitle {
            width: 7.1rem;
            height: .9rem;
            background-color: #fff;
            box-sizing: border-box;
            text-align: center;
            line-height: .9rem;
        }
        .moreList {
            width: 6.95rem;
            height: 100%;
            background-color: #fff;
            padding-bottom: 1.05rem;
            padding-left: .15rem;
        }
        .moreList li {
            width: 3.2rem;
            height: 1.3rem;
            float: left;
            display: flex;
            justify-content: space-around;
            margin: .1rem;
        }
        .moreListLeft {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 1.5rem;
        }
        .moreListLeft span {
            width:  1.5rem;
            height: .4rem;
            font-size: .18rem;
        }
        .moreListLeft i {
            font-size: .16rem;
            width:  1.5rem;
            height: .4rem;
        }
        .moreListRight {
            width: 1.3rem;
            height: 1.3rem;
        }
        
</style>