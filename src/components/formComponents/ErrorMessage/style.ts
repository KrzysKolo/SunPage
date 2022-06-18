import styled from 'styled-components';

export const ErrorMessageWrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.red};
  padding: 10px;
`;