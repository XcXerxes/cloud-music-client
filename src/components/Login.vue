<template>
    <div class="login-content">
      <div class="login-content__item login-user">
        <i class="fa fa-user"></i>
        <input type="text" placeholder="请输入手机号" v-model="loginForm.username">
      </div>
      <div class="login-content__item login-password">
        <i class="fa fa-lock"></i>
        <input :type="isEyeOpen ? 'text' : 'password'" placeholder="请输入密码" v-model="loginForm.password">
        <i class="eyes" :class="computedIcon" @click="isEyeOpen = !isEyeOpen"></i>
      </div>
      <div class="login-content__item login-submit">
          <button class="btn btn-primary" @click="submit" :class="setBtnStyle">登录</button>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    loginForm: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isEyeOpen: false
    }
  },
  computed: {
    isAbled () {
      return this.loginForm.username && this.loginForm.password
    },
    computedIcon () {
      return this.isEyeOpen ? 'fa fa-eye active' : 'fa fa-eye-slash'
    },
    // 设置按钮禁用
    setBtnStyle () {
      return !this.isAbled ? 'btn-disabled' : ''
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.loginForm)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/scss/base/mixins.scss';
.login-content {
  text-align: center;
  padding: 10px 20px;
  margin-top: 320px;
}
%fa-icon__style {
    position: absolute;
    font-size: 36px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 30;
}
.login-content__item {
    width: 460px;
    margin: 40px auto;
    position: relative;
    .fa-user {
      @extend %fa-icon__style;
      left: 20px;
    }
    input {
       @extend %login-input;
    }
}
.login-password {
    .fa-lock {
        @extend %fa-icon__style;
        left: 20px;
    }
    .eyes {
        @extend %fa-icon__style;
        transition: color .4s ease;
        right: 20px;
        &.active {
          color: #d43b33;
        }
    }
}
.login-submit {
    margin-top: 50px;
}
</style>

