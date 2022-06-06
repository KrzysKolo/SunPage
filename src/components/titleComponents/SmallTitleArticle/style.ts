import styled from 'styled-components';

export const SmallTitleArticleWrapper = styled.h3`
  color: ${({ theme }) => theme.color.grey900};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: 500;
  line-height: 28px;
`;