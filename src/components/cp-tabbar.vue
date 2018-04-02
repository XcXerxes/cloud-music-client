<template>
  <footer class="cp-tabbar">
    <template v-for="(item, index) in tabbarList">
      <router-link :to="item.path" class="cp-tabbar__item" :key="index" :active-class="$route.path.indexOf(item.path) !== -1 ? 'active' : ''">
        <div class="tabbar-item__icon">
          <i :class="`fa fa-${item.icon}`"></i>
        </div>
        <div class="tabbar-item__title">
          <span>{{item.title}}</span>
        </div>
      </router-link>
    </template>  
  </footer>
</template>
<script>
import {tabbarList} from '@/config/tabbar.conf'
export default {
  data () {
    return {
      tabbarList
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/scss/base/mixins';
.cp-tabbar {
  height: 96px;
  display: flex;
  align-items: center;
  background-color: $tabbar_bg_color;
  padding: 0 30px;
  justify-content: center;
  > a {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
    color: $tabbar_ft_color;
    transition: color .4s ease;
    &.active {
      color: #fff;
      i {
        color: inherit;
      }
    }
    i {
      font-size: 40px;
      color: inherit;
    }
  }
}
</style>

