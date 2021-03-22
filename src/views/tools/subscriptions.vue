<!--
 * @Author: h7ml
 * @Date: 2021-03-17 12:26:43
 * @LastEditTime: 2021-03-17 12:28:21
 * @LastEditors: h7ml
 * @FilePath: \dgiot_dashboard\src\views\tools\subscriptions.vue
 * @Description:
-->
<!-- 组件说明 -->
<template>
  <div class="subscriptions">{{ pageTitle }}</div>
</template>

<script>
  // import x from ''
  export default {
    name: 'Subscriptions',
    components: {},
    data() {
      return {
        pageTitle: 'subscriptions',
      }
    },
    computed: {},
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {},
    methods: {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>

<style lang="scss" scoped>
  /* @import url() */
  .subscriptions {
  }
</style>
