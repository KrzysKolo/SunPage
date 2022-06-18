import styled from 'styled-components';

export const MenuDivWrapper = styled.div`
  display: none;
  > ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    > li {
      border-radius: 4px;
      cursor: pointer;
      line-height: 24px;
      text-align: center;
      padding: 14px 24px;
      > .navlink {
        color: ${({ theme }) => theme.color.grey700};
        font-size: ${({ theme }) => theme.font.size.xs};
        transition: all .3s easy-in-out;
        text-decoration: none;
        :hover {
          color: ${({ theme }) => theme.color.primary700};
        };
      };
    };
  };
  ${({ theme }) => theme.mq.desktop} {
    align-items: center;
    display: flex;
    z-index: 999999!important;
  };
`;

