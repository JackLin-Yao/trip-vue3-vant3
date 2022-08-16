<script setup>
import NavBar from './component/nav-bar.vue'
</script>

<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner"><img src="@/assets/img/home/banner.webp" alt="" /></div>
  </div>
  <div class="location">
    <div class="city">广州</div>
    <div class="position">
      <span class="text">我的位置</span
      ><img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  .city {
    flex: 1;
  }
  .position {
    width: 74px;
    img {
      margin-left: 5px;
      width: 18px;

      height: 18px;
    }
    .text {
      font-size: 12px;
    }
  }
}
</style>
