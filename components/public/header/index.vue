<template>
  <section class="m-header">
    <el-row>
      <el-col>
        <top-bar/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search-bar/>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import TopBar from './topbar'
import SearchBar from './searchbar'

export default {
  components: {
    TopBar,
    SearchBar
  }
}
</script>
<style lang="scss">
@import '@/assets/css/public/header.scss';
</style>