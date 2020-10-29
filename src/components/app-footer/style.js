import styled from 'styled-components';

export const FooterWrap = styled.div `
  position:relative;
  display:flex;
  background:#f2f2f2;;
  height:172px;
  border-top:1px solid rgb(211,211,211);
  .content{
    display:flex;
    justify-content:space-between;
  }

`

export const FooterLeft = styled.div `
  width:520px;
  padding-top:15px;
  line-height:24px;
  .footerLinks-list{
    display:flex;
    .footerLinks-item{
      
      a{
        color:rgb(194,194,194);
      }
      span{
        color:rgb(194,194,194);
        margin:0 8px 0 10px;
      }
    }
    
  }
  .copyright,.report,.info {
    span {
      margin-right: 15px;
      color:#666666;
    }
  }

`

export const FooterRight = styled.ul`
  display: flex;
  width:420px;
  margin-top:33px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 450px;
    }
    :nth-child(1) .link{
      background-position: -60px -450px;
    }

    :nth-child(2) .link {
      background-position: -60px -101px;
    }
    :nth-child(3) .link {
      background-position: 0 0;
    }
    :nth-child(4) .link {
      background-position: -60px -50px;
    }
    :nth-child(5) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 180px 100px;
    }
    :nth-child(1) .title {
      background-position: 1px -117px;
    }

    :nth-child(2) .title {
      background-position: -1px -90px;
    }
    :nth-child(3) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(4) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(5) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`