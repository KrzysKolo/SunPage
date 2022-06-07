import styled from 'styled-components';

export const TitleCategoryWrapper = styled.h3`
  color: ${({ theme }) => theme.color.primary800};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 500;
  line-height: 24px;
`;