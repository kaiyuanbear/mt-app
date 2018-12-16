<template>
  <el-row 
    :gutter="15" 
    class="m-header">
    <el-col :span="6"><geo/></el-col>
    <el-col :span="6"><User/></el-col>
    <el-col :span="6"/>
  </el-row>
</template>
<script>
import Geo from './geo'
import User from './user'
export default {
  components: {
    Geo,
    User
  }
}
</script>
<style lang="scss">
  @import url(@/assets/css/public/layout.scss);
</style>