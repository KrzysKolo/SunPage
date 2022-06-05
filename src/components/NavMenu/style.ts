import styled from 'styled-components';

export const NavWrapper = styled.div`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90%;
  padding: 14px 0;
  position: relative;
  ${({ theme }) => theme.mq.bigDesktop} {
    max-width: 1360px;
    background: white;
  };
`;

export const MenuWrapper = styled.div`
> img {
    width: 80px;

}
  ${({ theme }) => theme.mq.desktop} {
    > .hamburger {
      display: none;
    }
  };
`;



export const LogoDiv = styled.div`
  width: 100px;
  height: 22px;
  object-fit: cover;
  > img {
    width: 100px;
  }
`;