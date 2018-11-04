<template>
  <div class="cityList">
     <el-container>
         <!--header-->
        <el-header>
             <Header></Header>
        </el-header>
         <!--content-->
        <el-main>
             <!---tab--->
             <Tabs @activeTab='activeTab' :focusTab='focusTab'></Tabs>
             <!---Tables---->
             <Tables :focusTab='focusTab' @activeTab='activeTab'></Tables> 
        </el-main>
     </el-container>
  </div>

</template>

<script>
import Header from './Header.vue';
import Tabs from './Tabs.vue';
import Tables from './Tables.vue';
export default {
    data(){
      return {focusTab:null}
    },
     methods:{
      activeTab(data){
        this.focusTab=data;
      }
     }, 
     components:{
      'Header':Header,
      'Tabs':Tabs,
      'Tables':Tables
    }
}
</script>


<style lang='less'>

    .right{
        float:right;
     }
     .left{
        float:left;
     }
     header{
       height:auto !important;
         .title{
          text-align: center;
          vertical-align: middle;
          margin: 0;
          margin-top: 3px;
          font-weight: 500;
         }
     }
     .el-main{
        padding-top:0;
             .el-table__header-wrapper{
              display: none;
             }
     }
      
</style>