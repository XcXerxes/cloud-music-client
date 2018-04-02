<template>
  <header class="cp-header">
    <div class="cp-header__left" v-if="isLeft">
      <slot name="left"></slot>
    </div>
    <div class="cp-header__middle">
      <slot name="middle" ></slot>
    </div>
    <div class="cp-header__right" v-if="isRight">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    isLeft: {
      type: Boolean,
      default: true
    },
    isRight: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/scss/base/variable';
@import '../assets/styles/scss/base/mixins';
.cp-header {
  height: 96px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-color: $primary_bg_color;
  .cp-header__left {
    height: 100%;
    .header-left {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .cp-header__middle {
    flex: 1;
    height: 100%;
    padding: 20px 20px 20px 30px;
    .header-middle {
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      i {
        position: absolute;
        left: 16px;
        color: #999;
        font-size: 36px;
      }
      input {
        height: 100%;
        width: 100%;
        border-radius: 60px;
        padding-left: 60px;
      }
    }
  }
   .cp-header__right{
    height: 100%;
    .header-right {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  i {
    font-size: 48px;
  }
  input {
    outline: none;
    border: none;

  }
  
}
</style>

