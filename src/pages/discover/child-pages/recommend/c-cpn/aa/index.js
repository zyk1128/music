import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux'

export default memo(function Aaa() {
  const state = useSelector(state => {
    // console.log(state);
    return state.toJS();
   
  },shallowEqual)
  console.log(state);
  return (
    <div>
      <h2>Aaa</h2>
    </div>
  )
})
