<!--
 * @Author: h7ml
 * @Date: 2021-03-18 15:50:37
 * @LastEditTime: 2021-03-18 16:31:38
 * @LastEditors: h7ml
 * @FilePath: \vue-admin-beautiful\src\views\index\workbench.vue
 * @Description:
-->
<template>
  <div class="workbench-container">
    <el-row :gutter="20">
      <el-col :lg="8" :md="12" :sm="24" :xl="6" :xs="24" />
      <el-col :lg="16" :md="12" :sm="24" :xl="18" :xs="24" />
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Workbench',
    components: {},
  }
</script>

<style lang="scss" scoped>
  .workbench-container {
    padding: 0 !important;
    /* background: $base-color-background !important; */
  }
</style>
