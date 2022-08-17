<script setup>
import { useCitiesStore } from '@/stores/cities'
import { storeToRefs } from 'pinia'

// const positionClick = () => {
//   navigator.geolocation.getCurrentPosition(
//     (res) => {
//       // console.log('🚀 ~ file: search-box.vue ~ line 3 ~ res', res)
//     },
//     (err) => {
//       // console.log(
//       //   '🚀 ~ file: search-box.vue ~ line 6 ~ navigator.geolocation.getCurrentPosition ~ err',
//       //   err
//       // )
//     }
//   )
// }
// const cityCklic = () => {
//   console.log()
// }

const citiesStore = useCitiesStore()
const { currentCity } = storeToRefs(citiesStore)
</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityCklic">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span
        ><img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <div class="date-rang">
      <div class="start"><span>入住</span><span>时间</span></div>
      <div class="stay"></div>
      <div class="end"><span>离店</span><span>时间</span></div>
    </div>
  </div>
</template>

<style scoped lang="less">
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
