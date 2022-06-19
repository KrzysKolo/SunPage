import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.color.white};
  padding: 0;
  margin-top: -2px;
`;

export const SectionThreeWrapper = styled.article`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.grey200};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem;
  width: 100vw;
  ${({ theme }) => theme.mq.tablet} {
    padding: 40px 0;
  };
  ${({ theme }) => theme.mq.desktop} {
    padding: 60px 0;
    max-width: 1360px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 120px 0;
    width: 1360px;
  };
`;

export const IconDiv = styled.div`
  height: 30px;
  margin: 40px 0 32px;
  object-fit: cover;
  width: 40px;
  > img {
    height: 30px;
    width: 40px;
  }
`;

export const ArrowTextDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  ${({ theme }) => theme.mq.tablet} {
    width: 90vw;
  };
`;
export const CarouselDiv = styled.div`
  width: 100%;
`;

export const ArrowDiv = styled.div`
  height: 40px;
  width: 40px;
`;

