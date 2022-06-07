import styled from 'styled-components';

export const TextDivWrapper = styled.div`
  color: ${({ theme }) => theme.color.grey900};
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 400;
  line-height: 28px;
  max-width: 90vw;
  text-align: center;
  ${({ theme }) => theme.mq.tablet} {
    max-width: 50vw;
  }
`;

