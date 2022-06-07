import styled from 'styled-components';

export const TextFooterWrapper = styled.p`
  color: ${({ theme }) => theme.color.grey700};
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 400;
  line-height: 26px;
  margin-right: 48px;
`;