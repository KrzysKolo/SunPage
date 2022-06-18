import styled from 'styled-components';

export const SectionOneWrapper = styled.div`
  padding: 73px 0;
  background: ${({ theme }) => theme.color.beige};
  ${({ theme }) => theme.mq.tablet} {
    padding: 50px 0;
  };
  ${({ theme }) => theme.mq.desktop} {
    padding: 80px 0;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 110px 0;
  };
 `;

export const SectionContainer = styled.div`
  margin:  0 5vw;
  max-width: 90vw;
  ${({ theme }) => theme.mq.tablet} {
    margin: 0 auto;
    min-margin-left: 5vw;
    min-margin-right: 5vw;
  };
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
    margin: 0 auto;
    min-margin-left: 5vw;
    min-margin-right: 5vw;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 0 auto;
    width: 1360;
  };
`;

export const ArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  };
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin: 0 5rem;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
  };
`;

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  ${({ theme }) => theme.mq.tablet} {
    padding-bottom: 40px;
  };
  ${({ theme }) => theme.mq.desktop} {
    padding-bottom: 50px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    padding-bottom: 78px;
  };
`;