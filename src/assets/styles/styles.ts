import styled from 'styled-components';

export const Container = styled.section`

  ${({ theme }) => theme.mq.phone} {
    max-width: 767px

  };
  ${({ theme }) => theme.mq.tablet} {
    max-width: 959px;

  };
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1919px;
  };
  ${({ theme }) => theme.mq.bigDesktop},
    width: 1920px;
  };
`