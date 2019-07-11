<template>
    <ul>
        <v-touch tag="li" v-for="(item,index) in receriveDataList" :key="index" @tap="handleDetail(item)" >
            <a href="#">
                <img :src='item.showPicUrl'/>
                <p>{{item.name}}<i>{{item.retailPrice}}</i></p>
                <span v-for="(item1,index) in item.itemTagList" :key="index">{{item1.name}}</span>
            </a>
        </v-touch>
    </ul>
</template>

<script>
export default {
    props:['popList','newList'],
    created() {
        if(this.popList){
            this.receriveDataList = this.popList;
        }else{
            this.receriveDataList = this.newList;
        }
    },
    data() {
        return {
            receriveDataList:[]
        }
    },
    methods: {
        handleDetail(item){
            this.$router.push({name:"xiangqing",params:{item:item}})
        }
    },
}
</script>

<style lang="scss" scoped>
ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: flex-start;
        padding-bottom: .2rem;
        li{
            width: 2.16rem;
            margin-top: .1rem;
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
                   i{
                       color: #b4282d;
                   } 
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
</style>
