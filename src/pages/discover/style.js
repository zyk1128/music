import styled from 'styled-components';

export const DiscoverWrap = styled.div `
  
`

export const TopBox = styled.div `
  height:30px;
  background-color:#C2020C;
  box-sizing:border-box;
  border-bottom:1px soild #a40011;
  .dicoverContent{
    position: relative;
    .dicoverMenu{
      position:absolute;
      top:-4px;
      padding-left:180px;
      display:flex;
      li{
        a{
          display: inline-block;
          height: 20px;
          line-height: 20px;
          padding: 0 13px;
          margin: 7px 17px 0;
          color: #fff;
        }
        :hover a, .active{
          text-decoration: none;
          background-color: #9B0909;
          border-radius: 20px;
        }
      }
      
    }
  }

`
