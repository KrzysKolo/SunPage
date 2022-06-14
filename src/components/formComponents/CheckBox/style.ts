import styled from 'styled-components';
import PaletColors from '../../../assets/colors/PaletColors';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';


export const CheckWrapper = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  border: ${({ theme }) => theme.color.grey500};;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all .3s easy;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.color.primary100};;
  }
  :active {
    background: ${({ theme }) => theme.color.primary700};;
  }

`;

export const Icon = styled.svg`
fill: none;
stroke: white;
stroke-width: 2px;
`
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
position: absolute;
width: 20px;
height: 20px;
opacity: 0;
cursor: pointer;

`


export const Input = styled.div<PropsGlobalStyle>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => props.checked ? `${PaletColors["primary-600"]}` : 'transparent'};
  transition: all 150ms;
  border: 1px solid ${(props) => props.checked ? `${PaletColors["primary-600"]}` : `${PaletColors["grey-500"]}`};
  cursor: pointer;
  :hover  {
    border: 1px solid ${(props) => props.checked ? `${PaletColors["primary-600"]}` : 'red'};
  }
  :active {
    background: ${({ theme }) => theme.color.primary700};
    };
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.grey500};

  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
` ;
