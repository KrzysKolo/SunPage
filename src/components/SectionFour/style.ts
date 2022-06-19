import styled, { keyframes } from 'styled-components';

const sliding = keyframes`
   from {
      transform: translateX(20%);
   }
   to {transform: translateX(-95%)}
`;
const slidingMediumDesktop = keyframes`
   from {
      transform: translateX(10%);
   }
   to {transform: translateX(-75%)}
`;
const slidingDeskopt = keyframes`
   from {
      transform: translateX(15%);
   }
   to {transform: translateX(-25%)}
`;

export const Section = styled.section`
  background: ${({ theme }) => theme.color.beige};
  padding: 128px 0;
`;

export const SectionFourWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 0 auto;
    max-width: 1360px;
  };
`;

export const HeaderDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 230px;
  padding-bottom: 64px;
  width: 96vw;
  > h2 {
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.poppins};
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    };
  ${({ theme }) => theme.mq.phone} {
    width: 90vw;
    };
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
    };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
   };
`;
export const ArticleMask = styled.div`
  width: 96%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  ${({ theme }) => theme.mq.phone} {
    width: 90vw;
  };
  ${({ theme }) => theme.mq.tablet} {
    max-width: 1360px;
    overflow: hidden;
    margin: 0 auto;
   };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
   };
`;

export const ArticleWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 96%;
  ${({ theme }) => theme.mq.phone} {
    width: 90vw;
  };
  ${({ theme }) => theme.mq.tablet} {
    animation: ${sliding} 14s linear alternate-reverse infinite;
    align-items: space-between;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
   };
   ${({ theme }) => theme.mq.mediumDesktop} {
    animation: ${slidingMediumDesktop} 10s linear alternate-reverse infinite;
   };
  ${({ theme }) => theme.mq.desktop} {
    animation: ${slidingDeskopt} 6s linear alternate-reverse infinite;
   };
  ${({ theme }) => theme.mq.bigDesktop} {
    animation: none;
    width: 1360px;
   };
`;
