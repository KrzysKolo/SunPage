import styled from 'styled-components';

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
    }
  ${({ theme }) => theme.mq.phone} {
    width: 90vw;
    }
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
    }
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
   }
`;
export const ArticleWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 96%;
  ${({ theme }) => theme.mq.phone} {
    width: 90vw;
  }
  ${({ theme }) => theme.mq.desktop} {
    align-items: space-around;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1360px;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
   }
`;