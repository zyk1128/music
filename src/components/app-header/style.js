import styled from 'styled-components';

export const HeaderWrap = styled.div`
  height:75px;
  background-color:#242424;
  .content{
    display:flex;
    justify-content:space-between;
    height:70px;
  }
  .divider{
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: grid;
  grid-template-columns: .3fr 1fr;
  
  .logo{
    display:block;
    width:176px;
    height:69px;
    text-indent:-9999px;
    background-position:0 0;

  }
  .select-list{
    display:flex;
    line-height: 70px;
    .select-item{
      position:relative;
      font-size:14px;
      a{
        padding:0 19px;
        display:block;
        color:#ccc;
      }
      :hover a, .active{
        background:#000;
        color: #fff;
        text-decoration: none;
      }
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
      :last-child a{
        position:relative;
        ::after{
          position:absolute;
          content:"";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 21px;
          right: -20px;
        }
      }
    }

  }

`

export const HeaderRight = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  .ant-input-affix-wrapper {
    border-radius: 32px;
    width:158px;
    height:32px;
    input{
      font-size:12px;
      ::placeholder{
        color:#9b9b9b;
      }
    }
  }
  .CreatorCenter{
    margin-left:16px;
    width:90px;
    height:32px;
    padding:0 10px;
    border:1px solid #4f4f4f;
    color:#ccc;
    border-radius: 20px;
    background:transparent;
  }
  a{
    margin-left:20px;
    padding-right:22px;
  }
`