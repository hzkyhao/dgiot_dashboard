<!-- 组件说明 -->
<template>
  <div class="topic_metrics">{{ pageTitle }}</div>
</template>

<script>
  // import x from ''
  export default {
    name: 'TopicMetrics',
    components: {},
    data() {
      return {
        pageTitle: 'topic_metrics',
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
  .topic_metrics {
  }
</style>
