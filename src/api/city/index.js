import Request from '@/service/index'
export function getCityAll() {
  return Request.get({ url: '/city/all' })
}
