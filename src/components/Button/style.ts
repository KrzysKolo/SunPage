import styled from 'styled-components';
import  PaletColors from '../../assets/colors/PaletColors';
import { PropsGlobalStyle } from '../../assets/styles/GlobalStyles';

export const WrapperBtn = styled.div<PropsGlobalStyle>`
  .button {
    background-color: ${(props) => props.outLine ? `${PaletColors["white"]}` : `${PaletColors["primary-600"]}`};
    border: ${(props) => props.outLine ? `2px solid ${PaletColors["primary-600"]}` : `none`};
    border-radius: 4px;
    color: ${(props) => props.outLine ? `${PaletColors["primary-600"]}` : `${PaletColors["white"]}`};
    font-family: ${({ theme }) => theme.font.family.poppins};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 500;
    padding: 16px 32px;
    position: relative;
    transition: all 0.3s easy-in-out;
    text-decoration: none;
    &:hover {
      background-color: ${(props) => props.outLine ? `${PaletColors["primary-50"]}` : `${PaletColors["primary-700"]}`};
    };
    &:active {
      background-color: ${(props) => props.outLine ? `${PaletColors["primary-50"]}` : `${PaletColors["primary-800"]}`};
    };
  };
  `;