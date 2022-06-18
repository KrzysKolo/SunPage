import styled from 'styled-components';
import { MenuDivWrapper } from '../MenuDiv/style';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const MenuDivSmallWrapper = styled(MenuDivWrapper)<PropsGlobalStyle>`
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  height: 90vh;
  left: 0;
  opacity: ${(props) => props.showSmallMenu ? '1' : '0'};
  position: absolute;
  right: 0;
  top: 58px;
  transition: ${(props) => props.showSmallMenu ? '1.8s' : '1.8s'};
  z-index: 999999999!important;
  > ul {
    flex-direction: column;
    margin-bottom: 4rem;
    > li {
      border-bottom: 2px solid transparent;
      cursor: pointer;
      line-height: 12px;
      padding: 16px;
      width: 100vw;
      :hover {
         color: ${({ theme }) => theme.color.primary700};
         border-bottom: 2px solid ${({ theme }) => theme.color.primary700};
        };
      :nth-child(odd){
        background: ${({ theme }) => theme.color.primary50};
      };
     > .navlink {
        color: ${({ theme }) => theme.color.grey700};
        font-size: ${({ theme }) => theme.font.size.xs};
        transition: all .3s easy-in-out;
        text-decoration: none;
      };
    };
  };
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  };
`;

