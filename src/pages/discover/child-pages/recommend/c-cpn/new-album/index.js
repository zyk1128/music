import React, { memo,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecommendNewAlbum_Action } from '../../store/createAction';
export default memo(function NewAlbum() {
  
  // useEffect(()=>{
  //   getRecommendNewAlbum().then(res=>{
  //     console.log(res);
  //   })
  // },[])

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getRecommendNewAlbum_Action(20))
  },[dispatch])
  return (
    <div>
      <h2>NewAlbum</h2>
    </div>
  )
})
