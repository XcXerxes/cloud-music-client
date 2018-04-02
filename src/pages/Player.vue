<template>
  <section class="cp-container">
     <cp-header>
      <div class="header-left" slot="left" @click="$router.back()">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="header-middle" slot="middle">
          <h3>I belive</h3>
      </div>
    </cp-header>
    <div class="cp-container__home"></div>
  </section>
</template>
<script>
import cpHeader from '@/components/cp-header'
export default {
  components: {
    cpHeader
  }
}
</script>

