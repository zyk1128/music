import React, { memo } from 'react';

import Banner from './c-cpn/banner';
import HotRecommend from './c-cpn/hot-recommend';
import NewAlbu from './c-cpn/new-album';
import Aaa from './c-cpn/aa';


import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

function RecommendPage() {
  return (
    <RecommendWrapper>
      <Banner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbu/>
          <Aaa/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>

      </Content>
     
      
    </RecommendWrapper>
  )
}


export default memo(RecommendPage);

