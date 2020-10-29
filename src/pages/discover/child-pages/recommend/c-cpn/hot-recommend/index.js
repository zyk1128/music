import React, { memo, useEffect } from 'react';

import { shallowEqual, useDispatch,useSelector } from 'react-redux';
import { getRecommendHotRecommend_Action } from '../../store/createAction'
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import SongsCover from '@/components/songs-cover';
import { RecommendWrapper } from './style';

export default memo(function HotRecommend() {

  const { recommend_HotRecommend } = useSelector(state => ({
    recommend_HotRecommend :state.getIn(['recommend','recommend_HotRecommend']),
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommendHotRecommend_Action(8));
  }, [dispatch]);


  return (
    <RecommendWrapper>
      <ThemeHeaderRCM title='热门推荐' keywords={['华语','流行','摇滚','民谣','电子']}></ThemeHeaderRCM>
      <div className="recommend-list">
        {
          recommend_HotRecommend.map((item,index)=>{
            return <SongsCover info={item} key={item.id}/>
          })
        }
      </div>
    </RecommendWrapper>
  )
})
