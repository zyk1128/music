import { combineReducers } from 'redux-immutable';
import reducer from '@/pages/discover/child-pages/recommend/store';


const All_reducer = combineReducers({
  recommend:reducer
});

export default All_reducer;