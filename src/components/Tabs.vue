<template>
  <!---tabs--->

 <el-tabs v-model="activeTab"  
          stretch 
          name="string"
          :before-leave="tabs">
    <el-tab-pane label="省"      
                 name="province">
    </el-tab-pane>
    <el-tab-pane label="地级市"  
                 name="cityList"> 
    </el-tab-pane>
    <el-tab-pane label="区"      
                 name="area">     
    </el-tab-pane>   
  </el-tabs>
</template>
<script>
 
  export default{
      props:['focusTab'],
      data(){
        return {activeTab:'province'}
      },
      methods:{
        tabs:function(activeTab,oldActiveTab){
            this.$emit('activeTab',activeTab);
          }
        },
        watch:{
          focusTab:function(newVal,oldVal){
            this.activeTab=this.focusTab?this.focusTab:'province';
          }
        }
  }
</script>