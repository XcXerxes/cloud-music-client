<template>
  <section class="cp-container">
    <cp-header>
      <div class="header-left" slot="left">
        <i class="fa fa-microphone"></i>
      </div>
      <div class="header-middle" slot="middle">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="搜索音乐、视频、歌词、电台">
      </div>
      <div class="header-right" slot="right" @click="$router.push({name: 'player', params: {id: 1}})">
        <i class="fa fa-music"></i>
      </div>
    </cp-header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>  
    <tabbar />
  </section>
</template>
<script>
import cpHeader from '@/components/cp-header'
import tabbar from '@/components/cp-tabbar'
export default {
  components: {
    tabbar,
    cpHeader
  },
  data () {
    return {}
  }
}
</script>

