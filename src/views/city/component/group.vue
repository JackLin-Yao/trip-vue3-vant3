<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCitiesStore } from '@/stores/cities'

// 定义props

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
})

// 动态的索引
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group)
  list.unshift('#')
  return list
})

// 监听城市的点击
const router = useRouter()
const citiesStore = useCitiesStore()
const cityClick = (city) => {
  // 选中当前城市
  citiesStore.currentCity = city

  // 返回上一级
  // router.back()
  // console.log('🚀 ~ file: group.vue ~ line 30 ~ cityClick ~ city', city)
}
</script>

<template>
  <div class="group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, index1) in group.cities" :key="index1">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
    <!-- <template v-for="(group, index) in groupData.cities" :key="index">
      <div class="group-item">
        <h2 class="title">标题：{{ group.group }}</h2>
        <div class="list">
          <div class="item">
            <template v-for="(city, index) in group.cities" :key="index"
              ><div class="city">{{ city.cityName }}</div></template
            >
          </div>
        </div>
      </div></template
    > -->
  </div>
</template>

<style scoped lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
