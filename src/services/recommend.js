import request from './request';


export const getRecommendBanner = () =>{
  return request({
    url:'/banner'
  })
}

export const getRecommendHotRecommend = (limit)=>{
  return request({
    url:'/personalized',
    params:{
      limit
    }
  })
}

export const getRecommendNewAlbum = (limit)=>{
  return request({
    url:'/top/album',
    params:{
      limit
    }
  })
}