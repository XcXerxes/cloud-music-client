<template>
  <section>
    <cp-swiper />
    <menu-list />
    <div class="find-content">
      <div class="find-content__single">
        <sub-title title="独家放送" />
        <div class="find-single__list">
          <media-item v-for="i in 3" :key="i" :class="i === 3 ? 'cp-flex-100' : 'cp-flex-50'" />
        </div>
      </div>
      <div class="find-content__news">
        <sub-title title="最新音乐" is-arrow/>
        <div class="find-news__list">
          <media-item v-for="i in 6" :key="i" class="cp-flex-33" />
        </div>
      </div>
      <div class="find-content__song">
        <sub-title title="推荐歌单" is-arrow/>
        <div class="find-song__list">
          <media-item v-for="i in 6" :key="i" class="cp-flex-33" />
        </div>
      </div>
      <div class="find-content__like">
        <sub-title title="猜你喜欢" />
        <div class="find-like__list">
          <media-item v-for="i in 8" :key="i" class="cp-flex-50" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import cpSwiper from '@/components/Home/swiper'
import menuList from '@/components/Home/menuList'
import SubTitle from '@/components/Home/SubTitle'
import mediaItem from '@/components/Home/MediaItem'
export default {
  components: {
    cpSwiper,
    menuList,
    SubTitle,
    mediaItem
  }
}
</script>
<style lang="scss" scoped>
%find-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.find-single__list {
  @extend %find-item;
}
.find-news__list {
  @extend %find-item;
}
.find-song__list{
  @extend %find-item;
}
.find-like__list {
  @extend %find-item;
}
</style>

