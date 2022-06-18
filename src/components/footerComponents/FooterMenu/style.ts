import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.color.beige};
  display: flex;
  justify-content: center;
  padding: 31px 0;
 `;

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 41px 0;
  width: 90vw;
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
    width: 100%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 0 auto;
    width: 1360px;
  };
`;

export const FooterMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
  };
`;

export const ImageDiv = styled.div`
 width: 100px;
  > .link {
    text-decoration: none;
    > img {
      width: 100px;
    };
  };
`;

export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  > li {
    cursor: pointer;
    margin-right: 20px;
    > .navlink {
      color: ${({ theme }) => theme.color.grey700};
      font-family: ${({ theme }) => theme.font.family.poppins};
      font-size: ${({ theme }) => theme.font.size.xs};
      font-weight: 500;
      line-height: 24px;
      text-decoration: none;
      :hover {
          color: ${({ theme }) => theme.color.primary700};
      }
    }
   }
`;