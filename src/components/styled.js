import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > aside {
    padding: 12px;
    background: #f6f6f6;
    display: flex;
    gap: 12px;
  }
  & .productsSection {
    background: #fff;
  }
`;



export const ViewCartStyle = styled.div`
.saveForLater{
 display: flex;
    gap: 16px;
     align-items: center;
& > div{
    display: flex;
    gap: 16px;
    width: min-content !important;
    align-items: center;
    }
& > div span{
min-width: 32px;
    height: 32px;
    display: flex;
    place-content: center;
    border: 1px solid #717171;
    justify-content: center;
    align-items: center;
    cursor: pointer;
        border-radius: 50%;
}
    & .ant-input{
    width: 62px;
    border-radius: 0;
    }
padding: 24px 16px;

}
    
    & footer{
    padding: 24px 16px;
    display: flex;
    justify-content: end;
        box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, .1);
    width: calc(100% + 32px);
    margin: 0 0 0 -16px;
    position: sticky;
    bottom: 0;
    z-index: 8;
        background: #fff;    
    }
  .productInfo {
    & h5 {
      white-space: nowrap;
      font-size: 16px;
      color: #212121;
    }
    display: flex;
    gap: 16px;
    & > div {
      & h4 {
        font-size: 16px;
        color: #212121;
      }
      & p {
        color: #878787;
        margin: 4px 0 16px;
      }

      & h3 {
        font-size: 22px;
        color: #212121;
        padding: 16px 0 0;
      }
    }
  }
  .productDetatails {
    display: flex;
    gap: 16px;
    & .imgContainsBox {
      width: 112px;
      height: 112px;
      & img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  aside {
    & .leftPannel {
      display: flex;
      flex-direction: column;
      gap: 16px;
      & h4 {
      }
      & .savedAddress {
        display: flex;
        gap: 24px;
        justify-content: space-between;
        align-items: center;
      }
      & > div {
        padding: 16px;
        border-radius: 4px;
        border: 1px solid #dddddda3;
        width: 100%;
        background: #fff;
        // max-width: 380px;
      }
         & > div:last-child{
          padding: 16px 16px 0;
         }
    }
    margin: 16px 0 0;
    & .container {
      width: 1280px;
      margin: 0 auto;
      display: flex;
      gap: 32px;
      & div {
        & :first-child {
        }
        width: 100%;
      }
    }
  }
  .stickyInfo {
    padding: 16px;
    background: #fff;
    max-width: 380px;
    border: 1px solid #dddddda3;
    position: sticky;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    top: 76px;
    & h4 {
      text-transform: uppercase;
      color: #717171;
      font-weight: bold;
    }
    & hr{
    height: 1px;
    background: #dddddda3;
    overflow: auto;
    margin: 0;
    border: none;
    width: calc(100% + 32px);
    margin: 0 0 0 -16px;
    }
    & .tableFormatList {
        display: flex;
    flex-direction: column;
    gap: 20px;
}
    & p{
    display: flex;
    margin: 0;

    justify-content: space-between;
    }
    & h6{
        font-size: 16px;
        color: #212121;
    }
    }

  }
`;
export const LoginWrapper = styled.div`
height: 100vh;
position: relative;
display: flex;
place-content: center;
    align-items: anchor-center;
    padding: 24px;
}

& .ant-card-bordered{
 margin: 24px auto;
 width: 480px;
 place-content: center;
 
}
 &.fa-xmark{
    font-size: 32px;
    position: absolute;
    right: 24px;
    color: #717171;
    top: 24px;
    transition: 600ms;
    cursor: pointer;
     &.fa-xmark:hover{
    color: #000;
    
}


`;
