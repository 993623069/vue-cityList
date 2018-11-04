	<template>
    <el-row>
          <el-col :span="8">
                <el-button 
                    type="primary" 
                    size='medium'>查询</el-button>
          </el-col>
          <el-col :span="8">
                <h2 class="title">城市列表</h2>
          </el-col>
          <el-col :span="8">
                <el-button 
                    type="primary" 
                    size='medium' 
                    class='right'>提交</el-button>
          </el-col>
    </el-row>
</template>
  
<script>
  export default{ 
  		name:'Header'
  }
</script>