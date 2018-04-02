<template>
  <div class="cp-subtitle">
    <h3>{{title}}</h3>
    <i v-if="isArrow" class="fa fa-angle-right"></i>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isArrow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/scss/base/variable';
@import '../../assets/styles/scss/base/mixins';
.cp-subtitle {
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  h3 {
    font-size: 36px;
    padding-left: 30px;
    margin-right: 20px;
  }
  i {
    font-size: 48px;
  }
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    top: 2px;
    background-color: $primary_bg_color;
    width: 6px;
    transform: scaleY(.4);

  }
}
</style>

