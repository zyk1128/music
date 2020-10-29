import { GET_RECOMMEND_BANNER } from './constant'
import  { getRecommendBanner }from '@/services/recommend'


const getRecommendBanner_ = (res) => ({
  type:GET_RECOMMEND_BANNER,
  recommendBanner:res.banners
})

export const getRecommendBanner_Action = () => {
  return dispatch =>{
    getRecommendBanner().then(res=>{
      dispatch(getRecommendBanner_(res))
    })
  }
  
}
