<template>
  <div class="media-content">
    <div class="media-body">
      <div class="media-body__img">

      </div>
      <div class="media-body__icon"></div>
      <div class="media-body__top"></div>
    </div>
    <div class="media-footer">
      <h5>小李子经典混剪， 多少人曾爱慕你年轻时的容颜</h5>
      <p v-if="isSub">小李子经典混剪， 多少人曾爱慕你年轻时的容颜</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isSub: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.media-content {
  margin-bottom: 10px;
}
.media-body {
  height: 210px;
  &__img {
    height: 100%;
    border: 1px solid #999;
  }
}
.media-footer {
  padding: 10px;
  h5 {
    font-size: 28px;
  }
}
</style>

