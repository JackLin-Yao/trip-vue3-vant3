<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
// import Request from '@/service/index'
// import { getCityAll } from '@/api/city/index'
import { useCitiesStore } from '@/stores/cities'
import { storeToRefs } from 'pinia'
// 组件
import Group from './component/group.vue'

// 搜索框功能
const searchValue = ref('')
const router = useRouter()
const onCancel = () => {
  router.back()
}
// tab的切换
const tabActive = ref('')

/**
 * 这个位置发送网络请求有两个缺点:
 *   1.如果网络请求太多, 那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
 *   2.如果页面封装了很多的子组件, 子组件需要这些数据, 我们必须一步步将数据传递过去(props)
 */
// 网络请求: 请求城市的数据
// const allCity = ref({})
// getCityAll().then((res) => {
//   console.log('🚀 ~ file: Index.vue ~ line 24 ~ getCityAll ~ res', res.data)
//   allCity.value = res.data
// })
const citiesStore = useCitiesStore()
citiesStore.fetchAllcitiesData()
const { allCities } = storeToRefs(citiesStore)

// 目的: 获取选中标签后的数据
// 1.获取正确的key: 将tabs中绑定的tabAction正确绑定
// 2.根据key从allCities获取数据, 默认直接获取的数据不是响应式的, 所以必须包裹computed
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<template>
  <div class="city">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
        v-model="value"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="onCancel"
      />
      <!--  tab的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <!-- <van-tab title="标签 1"></van-tab>
      <van-tab title="标签 2"></van-tab> -->
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content"><Group :group-data="currentGroup"></Group></div>
  </div>
</template>

<style scoped lang="less">
.city {
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  .top {
    position: relative;
    z-index: 9;
  }
  // 布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
