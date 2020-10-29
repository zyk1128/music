import React, { memo} from 'react';
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom';

import { dicoverMenu } from '@/common/local-data.js';
import { TopBox,DiscoverWrap } from './style';

export default memo(function JustinDiscover(props) {
  const { routes } = props.route;
  return (
    <DiscoverWrap>
      <TopBox>
        <div className="dicoverContent wrap-v1">
          <ul className="dicoverMenu">
            {
              dicoverMenu.map((item)=>{
                return (<li key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </li>)
              })
            }
          </ul>
        </div>
      </TopBox>
      {renderRoutes(routes)}
    </DiscoverWrap>
  )
})
