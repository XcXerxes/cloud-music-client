<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg'
      ]
    }
  }
}
</script>

