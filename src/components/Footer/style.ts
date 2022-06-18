import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.color.beige};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1920px;
  };
`;

export const FooterWrapper = styled.div`
  margin: 0 auto;
  width: 90vw;
};
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
  };
`;






