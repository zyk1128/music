import styled from 'styled-components';

export const BannerWrap = styled.div`
  background:url(${props=>props.bgImg})center/6000px;
  .banner{
    height:270px;
    display:flex;
    position:relative;
  }
`

export const BannerLeft = styled.div`
  width:730px;
  .banner-item{
    img{
      width:100%;
    }
  }
`
export const BannerRight = styled.div`
  width:245px;
  height:270px;
  background:url(${require("@/assets/img/download.png")});
`
export const BannerControl = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  .btn{
    background:url(${require("@/assets/img/banner_sprite.png")});
    width:37px;
    height:63px;
    position:absolute;
    top:50%;
    cursor: pointer;
    background-color: transparent;
    transform:translateY(-50%);
    :hover{
      background-color:rgba(0,0,0,.1);
    }
  }
  .left{
    left:-68px;
    background-position: 0 -360px;
    
  }
  .right{
    right:-68px;
    background-position: 0 -508px;
  }

`