<template>
    <div class="stick">
            <a class="listitem" href="javascript:;">新人专享价</a>
            <a class="listitem" href="javascript:;">24小时热销</a>
            <a class="listitem" href="javascript:;">口碑商品</a>
            <a class="listitem" href="javascript:;">APP特惠</a>
            <a class="listitem" href="javascript:;">限时购</a>
            <a class="listitem" href="javascript:;">1元拼团</a>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .stick{
    height: .87rem;
    line-height: .87rem;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    border-bottom: 1px solid #7F7F7F;
}
.stick::-webkit-scrollbar{
    display: none;
}
.listitem{
    flex-shrink: 0;
    text-align: center;
    display: block;
    height: .87rem;
    width: 2.14rem;
    font-size: .28rem;
    color: #7F7F7F;
}
.listitem:hover{
    background-color: #FFEEEF;
    color: red;
}
</style>