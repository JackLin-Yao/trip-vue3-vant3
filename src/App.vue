<script setup>
import TabBar from '@/components/tab-bar.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div>
    <router-view></router-view><TabBar v-show="!route.meta.hideTabBar"></TabBar>
  </div>
</template>

<style scoped></style>
