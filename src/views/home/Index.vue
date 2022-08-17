<script setup>
import NavBar from './component/nav-bar.vue'
import SearchBox from './component/search-box.vue'
</script>

<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner"><img src="@/assets/img/home/banner.webp" alt="" /></div>
  </div>
  <search-box></search-box>
</template>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
</style>
