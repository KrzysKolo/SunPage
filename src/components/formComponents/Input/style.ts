import styled from 'styled-components'


export const InputWrapper = styled.input`
  background: ${({ theme }) => theme.color.white};
  border-radius: 2px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.grey100};
  outline: none;
  margin: 5px 8px;
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  }
  ${({ theme }) => theme.mq.desktop} {
  background: ${({ theme }) => theme.color.white};
  border-radius: 2px;
  padding: 16px 20px;
  border: 1px solid ${({ theme }) => theme.color.grey100};
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  }
   max-width: 274px;
   width: 100%;
   padding-bottom: 10px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
   width: 274px;
  }`;
