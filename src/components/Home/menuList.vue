<template>
  <ul class="find-menu cp-b-1px">
    <li class="find-menu__item" v-for="(item, index) in menuList" :key="index">
      <div class="find-menu__item-media">
        <i :class="`fa fa-${item.icon}`"></i>
      </div>
      <span>{{item.title}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      menuList: [
        {
          icon: 'bar-chart',
          title: '私人FM'
        },
        {
          icon: 'bar-chart-o',
          title: '每日推荐'
        },
        {
          icon: 'area-chart',
          title: '歌单'
        },
        {
          icon: 'pie-chart',
          title: '排行榜'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/scss/base/variable';
@import '../../assets/styles/scss/base/mixins';
.find-menu {
  display: flex;
  &__item {
    flex: 1;
    text-align: center;
    padding: 30px 0;
    &-media {
      height: 98px;
      width: 98px;
      margin: 0 auto;
      margin-bottom: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $primary_bg_color;
      i {
        font-size: 60px;
        color: $primary_bg_color;
      }
    }
    span {
      color: #333;
    }
  }
}
</style>

