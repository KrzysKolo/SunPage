import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.color.beige};
  border-top: 1px solid ${({ theme }) => theme.color.grey100};
  display: flex;
  justify-content: center;
  padding: 31px 0;
  margin: 0 auto;
`;

export const FooterInfoDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
    width: 100%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
    margin: 0 auto;
  };
`;

export const DockDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: row;
  };
`;

export const SMMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  > li {
    cursor: pointer;
    margin-right: 20px;
    > .navlink {
      > div {
        align-items: center;
        background: ${({ theme }) => theme.color.white};
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        height: 40px;
        justify-content: center;
        width: 40px;
        &:hover {
          background: ${({ theme }) => theme.color.primary100};
        };
        &:active {
          background: ${({ theme }) => theme.color.primary200};
        };
        > img {
          border-radius: 50%;
          height: 20px;
          width: 20px;
        };
      };
      &:hover {
          color: ${({ theme }) => theme.color.primary700};
      };
    };
   };
   ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: row;
    };
`;






