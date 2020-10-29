import React, {memo, useCallback, useEffect,useRef, useState} from 'react';

import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {getRecommendBanner_Action} from '../../store/createAction';

import {Carousel} from 'antd';
import {BannerControl, BannerLeft, BannerRight, BannerWrap} from './style';

export default memo(function Banner() {
  // store
  const [currentIndex, setCurrentIndex] = useState(0);

  // redux-hook
  const { recommend_banner } = useSelector(state =>({
    recommend_banner: state.get('recommend').get('recommend_banner')
  }),shallowEqual);

  const dispatch = useDispatch();

    // other hook
  useEffect(() => {
    dispatch(getRecommendBanner_Action());
  }, [dispatch])

  const bannerRef = useRef();

  const bannerHandle = useCallback((from,to)=>{
    setCurrentIndex(to);
  },[],);
  
  const bgImg = recommend_banner[currentIndex] && recommend_banner[currentIndex].imageUrl+"?imageView&blur=40x20";

  return (
    <BannerWrap bgImg={bgImg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={bannerRef} effect="fade" autoplay beforeChange={bannerHandle}>
          {
            recommend_banner.map((item)=>{
                return (
                  <div className="banner-item" key={item.encodeId}>
                    <img src={item.imageUrl} alt={item.typeTitle}></img>
                  </div>
                )
            })
          }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e=>{bannerRef.current.prev()}}></button>
          <button className="btn right" onClick={e=>{bannerRef.current.next()}}></button>
        </BannerControl>
      </div>
    </BannerWrap>
  )
})
