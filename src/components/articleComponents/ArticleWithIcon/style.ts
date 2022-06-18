import styled from 'styled-components';

export const ArticleWithIconWrapper = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  :nth-child(odd) {
    background: ${({ theme }) => theme.color.primary50};
    margin: 5px 0;
    padding: 10px;
  }
  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
    flex-direction: column;
    :nth-child(odd) {
      background: transparent;
      margin: 0;
      padding: 0;
    };
  };
  ${({ theme }) => theme.mq.desktop} {
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 495px;
    margin: 0 10px;
    padding: 0;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 440px;
    margin: 0 10px;
    padding: 0;
  };
`;

export const IconDiv = styled.div`
  height: 56px;
  width: 56px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-top: 20px;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 10px;
  };
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 20px;
  };
`;

export const TextP = styled.p`
  color: ${({ theme }) => theme.color.grey800};
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 400;
  line-height: 28px;
  margin-top: 12px;
`;