import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.color.beige};
  margin: 128px auto;
`;

export const SectionFourWrapper = styled.div`
`;
export const HeaderDiv = styled.div`
`;

export const ArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin: 0 5rem;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
  }
`;