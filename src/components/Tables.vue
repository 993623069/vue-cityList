<template>
      
      <el-table
	         :data="tableList"
	          @row-click="handleClick"
	          height="450">
	            <el-table-column
	              prop="name"
	              size='medium'>
	            </el-table-column>
	    </el-table>  

</template>
<script>
export default{
	props:['focusTab'],
	data(){
		return {
			    tableList:null,
			    cityList:{
			    	'province':null,     //缓存省的数据
			    	'city':null,         //缓存地级市的数据
			    	'area':null          ////缓存区的数据
			    }
			   }
	},
   mounted: function () {
    	let focusTab=this.focusTab
        getCityList(focusTab?focusTab:'province',this);
   },
	methods:{
	   handleClick:function(row, event, column){
	          if(row.target !== null){
	               getCityList(row.target,this);
	               this.$emit('activeTab',row.target);
	             }
	        }
	},
	watch:{
       focusTab: function(newVal,oldVal){
          getCityList(newVal,this);
       }
    }
}

let getCityList=(activeName,that)=>{
	let url='../static/data/'+activeName+'.json';
	that.axios.get(url)
	    .then((response) => {
	         that.tableList=response.data;
	    })
}
</script>