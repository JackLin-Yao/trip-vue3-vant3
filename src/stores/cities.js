import { getCityAll } from '@/api/city'
import { defineStore } from 'pinia'
export const useCitiesStore = defineStore('cities', {
  state: () => {
    return {
      allCities: {},
      currentCity: {
        cityName: '广州',
      },
    }
  },
  actions: {
    async fetchAllcitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    },
  },
})
