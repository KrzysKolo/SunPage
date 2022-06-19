import styled from 'styled-components';

export const ErrorMessageWrapper = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 8px;
  margin-left: 10px;
  padding: 0;
  text-align: left;
  width: 100%;
  ${({ theme }) => theme.mq.desktop} {
    max-width: 274px;
    width: 100%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
   width: 274px;
  };
`;