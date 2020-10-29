import { GET_RECOMMEND_BANNER } from './constant';
import { Map } from 'immutable';
const defaultState = Map({
  recommendBanner:[]
});

function reducer(state = defaultState , action) {
  switch (action.type) {
    case GET_RECOMMEND_BANNER:
      return state.set('recommendBanner',action.recommendBanner)
    default:
      return state;
  }
}

export default reducer