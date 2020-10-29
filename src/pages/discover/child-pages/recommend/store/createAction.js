import * as actionTypes from './constant';

import { 
  getRecommendBanner,
  getRecommendHotRecommend,
  getRecommendNewAlbum
} from '@/services/recommend';



const recommendBanner_ = (res)=>({
  type:actionTypes.GET_RECOMMEND_BANNER,
  recommend_banner:res.banners 
})

export const getRecommendBanner_Action = () => {
  return dispatch => {
     getRecommendBanner().then(res=>{
       dispatch(recommendBanner_(res))
     })
  }
}

const getRecommendHotRecommend_ = (res)=>({
  type:actionTypes.GET_RECOMMEND_HOTRECOMMEND,
  recommend_HotRecommend:res.result
})

export const getRecommendHotRecommend_Action = (limit)=>{
  return dispatch =>{
    getRecommendHotRecommend(limit).then(res=>{
      dispatch(getRecommendHotRecommend_(res));
    })
  }
}

const getRecommendNewAlbum_ = (res)=>({
  type:actionTypes.GET_RECOMMEND_NEWALBUM,
  recommend_newAlbum:res.albums
})
export const getRecommendNewAlbum_Action = (limit) =>{
  return dispatch=>{
    getRecommendNewAlbum(limit).then(res=>{
      dispatch(getRecommendNewAlbum_(res))
    })
  }
}