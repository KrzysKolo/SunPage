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
    > img {
      display: none;
    }
  };
`;

export const MenuDiv = styled.div`
  display: none;
  > ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    > li {
    /*   background: ${({ theme }) => theme.color.primary600}; */
      border-radius: 4px;
      border-bottom: 2px solid ${({ theme }) => theme.color.primary600};
      color: ${({ theme }) => theme.color.grey700};
      cursor: pointer;
      font-size: ${({ theme }) => theme.font.size.xs};
      line-height: 24px;
      text-align: center;
      padding: 14px 24px;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    display: inline-block;
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