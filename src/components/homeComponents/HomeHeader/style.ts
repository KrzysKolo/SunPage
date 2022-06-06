import styled from 'styled-components';
import  PaletColors from '../../../assets/colors/PaletColors';

export const HomeHeaderWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 100vw;
  max-height: 800px;
  ${({ theme }) => theme.mq.phone} {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${({ theme }) => theme.mq.tablet} {
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    height: 70vh ;
  }
  ${({ theme }) => theme.mq.desktop} {
    height: 90vh;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    height: 800px;
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export const HeaderDiv = styled.div`
  display: none;
  ${({ theme }) => theme.mq.tablet} {
    background: rgba(36, 37, 41, 1);
    display: flex;
    height: 100%;
    width: 50%;
     > div {
       align-items: flex-start;
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       margin-left: 5vw;
       padding: 12vh 0;
       width: 100%;
      > h1 {
        color: ${({ theme }) => theme.color.white};
        font-family: ${({ theme }) => theme.font.family.poppins};
        font-size: ${({ theme }) => theme.font.size.lg};
        font-weight: 600;
        line-height: 50px;
        margin-bottom: 20px;
        width: 70%;
      }
      > p {
        color: ${({ theme }) => theme.color.white};
        font-family: ${({ theme }) => theme.font.family.inter};
        font-size: ${({ theme }) => theme.font.size.m};
        font-weight: 400;
        line-height: 30px;
        margin-bottom: 32px;
        width: 70%;
      }
    }
  };
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    height: 100%;
    width: 50%
     > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: space-between;
      > h1 {
        font-size: ${({ theme }) => theme.font.size.lg};
        font-family: ${({ theme }) => theme.font.family.poppins};
        font-weight: 600;
        color: ${({ theme }) => theme.color.white};
        line-height: 62px;
        width: 70%;
        margin-bottom: 32px;
     }
      > p {
        font-size: ${({ theme }) => theme.font.size.m};
        font-family: ${({ theme }) => theme.font.family.inter};
        font-weight: 400;
        color: ${({ theme }) => theme.color.white};
        line-height: 30px;
        width: 85%;
        margin-bottom: 42px;
      }
    }
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    height: 800px;
    width: 50%;
    padding: 8rem 0 ;
     > div {
       display: flex;
       flex-direction: column;
       margin-left: 5vw;
       padding-left: 180px;
       padding-right: 109px;
       width: 100%;
      > h1 {
        font-size: ${({ theme }) => theme.font.size.lg};
        font-family: ${({ theme }) => theme.font.family.poppins};
        font-weight: 600;
        color: ${({ theme }) => theme.color.white};
        line-height: 62px;
        width: 59%;
        margin-bottom: 32px;
       }
      > p {
        font-size: ${({ theme }) => theme.font.size.m};
        font-family: ${({ theme }) => theme.font.family.inter};
        font-weight: 400;
        color: ${({ theme }) => theme.color.white};
        line-height: 30px;
        width: 85%;
        margin-bottom: 42px;
      }
    }
  }
`;

export const ImgDiv = styled.div`
  max-height: 60vh;
  margin: 0 auto;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  > .small,
    .big {
    display: none;
  }
  > div {
    align-items: center;
    background-color: rgba(36, 37, 41, 1);
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    min-width: 223px;
    justify-content: center;
    width: 100vw;
    z-index: !important;
    padding: 1rem;
    margin: 0 auto;
      > h1 {
        font-size: ${({ theme }) => theme.font.size.l};
        font-family: ${({ theme }) => theme.font.family.poppins};
        font-weight: 600;
        color: ${({ theme }) => theme.color.white};
        max-width: 767px;
        text-align: left;
        padding: 1rem;
        line-height: 36px;
      }
      > p {
        font-size: ${({ theme }) => theme.font.size.s};
        font-family: ${({ theme }) => theme.font.family.inter};
        font-weight: 400;
        color: ${({ theme }) => theme.color.white};
        max-width: 767px;
        text-align: left;
        padding: 1rem;
        margin-bottom: 2rem;
        line-height: 20px;
      }
    }
  ${({ theme }) => theme.mq.phone} {
    margin: 0 auto;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 90vh;
    overflow:hidden;
    > .small {
      display: flex;
      min-width: 100%;
      object-fit: cover;
    }
    > .big {
      display: none;
    }
    > div {
      align-items: center;
      background-color: rgba(36, 37, 41, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      position: absolute;
      top: 0;
       > h1 {
        color: ${({ theme }) => theme.color.white};
        font-family: ${({ theme }) => theme.font.family.poppins};
        font-size: ${({ theme }) => theme.font.size.l};
        font-weight: 600;
        line-height: 34px;
        width: 90%;
        max-width: 420px;
        text-align: left;
      }
      > p {
        color: ${({ theme }) => theme.color.white};
        font-family: ${({ theme }) => theme.font.family.inter};
        font-size: ${({ theme }) => theme.font.size.m};
        font-weight: 400;
        line-height: 20px;
        width: 90%;
        max-width: 420px;
        padding: 1rem;
        text-align: left;
      }
      > .btn {
        padding-top: 1rem;
      }
    }
  };
  ${({ theme }) => theme.mq.tablet} {
    object-fit: cover;
    min-height: 100%;
    width: 50%;
    overflow:hidden;
    > .small {
      min-width: 100%;
      object-fit: cover;
    }
    > .big {
      display: none;
    }
    > div {
      display: none;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    object-fit: cover;
    width: 50%;
    min-height: 100% ;

    > .small {
      display: none;
    }
    > .big {
      display: inline-block;
      min-width: 100%;
      object-fit: cover;
     }
  }
`;
