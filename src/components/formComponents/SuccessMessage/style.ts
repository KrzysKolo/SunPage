import styled from 'styled-components';

export const SuccessMessageWrapper = styled.div`
  color: ${({ theme }) => theme.color.green};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: 600;
  line-height: 48px;
  margin-top: 5px;
  padding: 0;
  width: 100%;
  text-align: center;
`;
