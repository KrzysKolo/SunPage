import styled from 'styled-components';

export const TextAreaWrapper = styled.textarea`

background: ${({ theme }) => theme.color.white};
  border-radius: 2px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.grey100};
  outline: none;
  margin: 0 8px;
  width: 100%;
  height: 100px;
  :hover {
    border: 1px solid ${({ theme }) => theme.color.grey300};
  }
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  }
  ${({ theme }) => theme.mq.tablet} {
    background: ${({ theme }) => theme.color.white};
  padding: 16px 20px;
  border: 1px solid ${({ theme }) => theme.color.grey100};
  border-radius: 2px;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  }
  ${({ theme }) => theme.mq.desktop} {
   height: 100%;
   width: 100%;

  };
  ${({ theme }) => theme.mq.bigDesktop} {
   width: 100%;
   height: 100%;
  }
`;