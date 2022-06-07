import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.color.white};
  padding: 0;
  margin-top: -2px;
`;

export const SectionThreeWrapper = styled.article`
  align-items: center;
  border-top: 1px solid${({ theme }) => theme.color.grey200};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem;
  width: 90vw;
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

export const ImageDiv = styled.div`
  border-radius: 50%;
  height: 56px;
  margin: 40px auto 13px;
  object-fit: cover;
  width: 56px;
  > img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
`;

export const TextH3 = styled.h3`
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 2px;
`;

export const TextH4 = styled(TextH3)`
    color: ${({ theme }) => theme.color.grey700};
    font-size: ${({ theme }) => theme.font.size.s};
    line-height: 28px;
    margin-bottom: 2px;
`;