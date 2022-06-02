import styled from 'styled-components';

export const Container = styled.section`
  background: red;
  ${({ theme }) => theme.mq.phone} {
    background: blue;
  };
  ${({ theme }) => theme.mq.tablet} {
    background: grey ;
  };
  ${({ theme }) => theme.mq.desktop} {
    background: navy ;
  };
  ${({ theme }) => theme.mq.bigDesktop},
    background: yellow ;
  };
`