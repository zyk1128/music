import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import {  Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from '@/common/local-data';
import { HeaderLeft, HeaderRight, HeaderWrap } from './style';


export default memo(function JustinAppHeader() {
  // 页面代码


  const showSelectItem = (item,index)=>{
    if (index<3) {
      return <NavLink to={item.link}>
        {item.title}
        <i className="icon sprite_01"></i>
        </NavLink>
    }else{
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrap>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <ul className="select-list">
            {
              headerLinks.map((item,index)=>{
              return <li className="select-item" key={item.title}>{showSelectItem(item,index)}</li>
              })
            }
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户"  prefix={<SearchOutlined />}></Input>
          <button className="CreatorCenter">创作者中心</button>
          <a href="#/">登录</a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrap>
  )
})