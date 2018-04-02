<template>
  <section class="login-wrapper">
    <div class="mask" v-lazy:background-image="bg"></div>
    <div class="login-container">
      <Login :loginForm="loginForm" @submit="submit" />
    </div>
    <div class="login-other">
      <div class="login-other__heading">
        <div class="hr"></div>
        <p>第三方直接登录</p>
      </div>
      <div class="login-other__body">
        <div class="login-other__item">
          <i class="fa fa-qq"></i>
        </div>
        <div class="login-other__item">
          <i class="fa fa-weixin"></i>
        </div>
        <div class="login-other__item">
          <i class="fa fa-weibo"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Login from '@/components/Login'
export default {
  components: {
    Login
  },
  data () {
    return {
      bg: require('../assets/images/bg.jpg'),
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      console.log(this.loginForm)
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-wrapper {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-attachment: fixed;
      background-size: cover;
      background-repeat: no-repeat;
      filter: blur(5px);
      background-color: rgba(40, 40, 40, .3);
    }
  }
  .login-container {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-other {
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 0 60px 40px;
  }
  .login-other__heading {
    position: relative;
    .hr {
      height: 2px;
      width: 100%;
      background: #ccc;
      position: relative;
      z-index: 5;
    }
    p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      top: -16px;
      z-index: 10;
      overflow: hidden;
      background-color: black;
      padding: 0 20px;
    }
  }
  .login-other__body {
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    
  }
  .login-other__item {
    border-radius: 50%;
    background-color: #333;
    padding: 16px;
    min-width: 84px;
    min-height: 84px;
    i {
      font-size: 60px;
    }
  }
</style>


