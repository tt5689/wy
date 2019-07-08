<template>
    <ul class="cartGroupList">
            <li class="gItem">
                <!-- <i class="checkOut"></i> -->
                <input type="checkbox" />
                <img />
                <div class="goodInfor">
                    <p>dasdsdewe</p>
                    <span>商品信息</span>
                    <strong>dfsf</strong>
                </div>
                <div class="m-selnum">
                    <button>-</button>
                    <input type="text" />
                    <button>+</button>
                </div>
            </li>
            <li class="gItem">
                <!-- <i class="checkOut"></i> -->
                <input type="checkbox" />
                <img />
                <div class="goodInfor">
                    <p>dasdsdewe</p>
                    <span>商品信息</span>
                    <strong>dfsf</strong>
                </div>
                <div class="m-selnum">
                    <button>-</button>
                    <input type="text" />
                    <button>+</button>
                </div>
            </li>
        </ul>
</template>

<script>
export default {
    
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
}
</style>
