import styled from 'styled-components';

export const SectionTwoWrapper = styled.section`
  padding: 30px 0;
  border-bottom: 1px solid${({ theme }) => theme.color.grey200};
  background: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.mq.tablet} {
    padding: 40px 0;
  };
  ${({ theme }) => theme.mq.desktop} {
    padding: 60px 0;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 110px 0;
  };
`;
