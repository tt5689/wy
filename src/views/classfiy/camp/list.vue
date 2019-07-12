 <template>
 <div class="list">
     <ul>
        <li  v-for="(item,index) in hotKeywordVOList" :key= "index">{{item}}</li>
     </ul>
     
 </div>
     
 </template>
 <script>
//  import {ficationList} from "api/home/thome.js";
import Json from 'api/json/home.js'
 export default {
      async created() {
        //  let data = await ficationList();
        let data1 = Json.ficationList;
        this.hotKeywordVOList = data1;
    },
    data(){
        return{
            hotKeywordVOList:[]

        }

    }
    
    }

 </script>
 <style scoped>
    ul{
        float: left;
        width: 2.06rem;
        height: 100%;
    }
    ul li{
       height: 0.56rem;
        margin-top: 0.4rem;
        font-size: 0.3rem;
        text-align: center;
    }
 
 </style>
 
 