import { Map } from 'immutable'
import  * as RecommendActions from './constant';

// 创建这个recommend 的reducer
const defaultState = Map({
  recommend_banner :[],
  recommend_HotRecommend:[]
})

function reducer(state = defaultState , action) {
  switch (action.type) {
    case RecommendActions.GET_RECOMMEND_BANNER: 
      return state.set('recommend_banner',action.recommend_banner)
    case RecommendActions.GET_RECOMMEND_HOTRECOMMEND: 
      return state.set('recommend_HotRecommend',action.recommend_HotRecommend)
    case RecommendActions.GET_RECOMMEND_NEWALBUM: 
      return state.set('recommend_newAlbum',action.recommend_newAlbum)
    default:
      return state
  }
}

export default reducer;

