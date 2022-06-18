import styled from 'styled-components';
import PaletColors from '../../../assets/colors/PaletColors';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const CheckWrapper = styled.div`
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: center;
  position: relative;
  transition: all .3s easy;
  width: 36px;
  &:hover {
    background: ${({ theme }) => theme.color.primary100};
  };
  &:active {
    background: ${({ theme }) => theme.color.primary700};
    height: 36px;
    width: 36px;
  };
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.color.white};
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  height: 20px;
  position: absolute;
  opacity: 0;
  width: 20px;
`;

export const Input = styled.div<PropsGlobalStyle>`
  background: ${(props) => props.checked ? `${PaletColors["primary-600"]}` : 'transparent'};
  border: 1px solid ${(props) => props.checked ? `${PaletColors["primary-600"]}` : `${PaletColors["grey-500"]}`};
  cursor: pointer;
  display: inline-block;
  height: 20px;
  transition: all 150ms;
  width: 20px;
  &:hover  {
    border: 1px solid ${(props) => props.checked ? `${PaletColors["primary-600"]}` : 'red'};
  };
  &:active {
    background: ${({ theme }) => theme.color.primary700};
    };
  };
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.grey500};
  };
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    };
` ;
