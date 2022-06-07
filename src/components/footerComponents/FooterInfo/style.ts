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
        width: 40px;
        height: 40px;
        border-radius: 50%;
        > img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      :hover {
          color: ${({ theme }) => theme.color.primary700};
      }
    }
   }
   ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: row;
    }
`;






