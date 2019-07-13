<template>
<div class="page">
    <div class="g-hd">
        <div class="ava">
            <img src="https://yanxuan.nosdn.127.net/15625705586117441.png" class="img01">
        </div>
        <div class="infos">
            <ul class="nums">
                <li>
                    <div class="n1">9083.3w</div>
                    <div class="t1">阅读</div>
                </li>
                <li>
                    <div class="n2">14.9w</div>
                    <div class="t2">转发</div>
                </li>
                <li>
                    <div class="n3">10.7w</div>
                    <div class="t3">订阅</div>
                </li>
            </ul>
        </div>
        <a href="#" class="but">订阅</a>
    </div>
    <h1>网易员工精选</h1>
    <h3>在网易自家员工眼里，什么最值得买？订阅此专栏，每天发现一件精选好货，享受一个特惠福利！</h3>
    <ul class="g-list">
        <li>
            <div class="f-cb">
                <div class="ava">
                    <img src="https://yanxuan.nosdn.127.net/035f9b97855389aa5ec2fd092d825f8a.jpg?imageView&thumbnail=122y122&quality=85" alt="" class="img02">
                </div>
                <div class="infos fo">
                    <div class="t">网易游戏：柠檬</div>
                    <div class="n">07-11</div>
                </div>
            </div>
            <div class="pic">
                <img src="https://yanxuan.nosdn.127.net/14dd5e608534edfa1e759234420b0d92.jpg?quality=85&thumbnail=750x450&imageView" alt="" class="img03">
            </div>
        </li>
    </ul>
    <div class="article">
       <div class="articl">杯子不美，怎么好好喝水？</div>
       <div class="conter">夏天到了，作为一个杯子控，当然也要拿出最时髦的杯子喝水。</div>
       <div class="botter">它还专门设计了可替换的瓶盖，在办公室插着吸管喝
             ，出门就换上硅胶提手。有多种颜色选择，
             搭配身上穿的衣服，就像带了一款时尚单品。
        </div>
    </div>

</div>
    
</template>
<script>
export default {
    name:"recbody",
    
}
</script>
<style scoped>
.page{
    position: absolute;
    top: 1.98rem;
    bottom: 0.98rem;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto; 
}
.g-hd{
    height: 1.6rem;
    margin: .56rem .3rem 0;
    position: relative;
}
.ava{
    width: 1.6rem;
    height: 1.6rem;
    }
.ava .img01{
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
}
.infos{
    position: absolute;
    right: 0;
    top: 0;
    }
.nums{
    float: left;
}
.nums li{
    display: inline-block;
    text-align: center;
    min-width: 1.02rem;
    margin-left: .56rem;
}
.but{
position: absolute;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 1.44rem;
    height: .56rem;
    line-height: .56rem;
    color: #fff;
    font-size: .26rem;
    background: #ce2424;
    border-radius: .3rem;
    bottom: 0;
    right: 0;
    text-align: center;
    }
h1{
    font-size: .48rem;
    color: #333;
    line-height: .72rem;
    font-weight: 700;
    padding-left: .3rem;
    margin-top: .47rem;
}
h3{
    padding: 0 .3rem;
    margin-top: .08rem;
}
.g-list {
    margin-top: .37rem;
    border-bottom: 1px solid #f4f4f4;
    }
.g-list li{
    padding: .52rem 0 .1rem;
    position: relative;
}
.avas{
    float: left;
    width: .64rem;
    height: .64rem;
    border-radius: 50%;
    overflow: hidden;
}
.ava .img02{
     width: .64rem;
    height: .64rem;
     border-radius: 50%;
     margin-left: 0.2rem;

}
.fo{
    float: left;
    margin: 0.6rem 0.5rem 0 .2rem;
}
.t{
    font-size: .28rem;
    color: #333;
    text-align: left;
    font-weight: 700;
}
.n{
    font-size: .24rem;
    color: #666;
    text-align: left;
    line-height: .32rem;
}
.pic{
   width: 100%;
    height: 4.5rem;
}
.pic .img03{
    width: 7.5rem;
    height: 4.5rem;
    margin-right: 0.1rem;
}
.article{
    font-size: .36rem;
    color: #333;
    text-align: left;
    line-height: .52rem;
    font-weight: 700;
    margin-left: 0.2rem;
}
.conter{
    font-size: 0.28rem;
}
.botter{
    font-size: 0.28rem;
}
</style>
