<template>
  <div class="cp-container__home">
    <van-tabs :active="active" @click="tabClick">
      <van-tab v-for="(item, index) in tabs" :title="item.title" :key="index">
        <component :is="active === 0 ? 'Findmusic' : ''"></component>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Findmusic from './Findmusic'
export default {
  components: {
    Findmusic
  },
  data () {
    return {
      tabs: [
        {
          title: '发现音乐'
        },
        {
          title: '主播电台'
        }
      ],
      active: 0,
      currentView: 'findmusic'
    }
  },
  methods: {
    tabClick (index) {
      this.active = index
    }
  }
}
</script>
