import styled from 'styled-components';
import  PaletColors from '../../../assets/colors/PaletColors';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 300px;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 300px;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.grey900};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: 27px;
  left: 15px;
  background: #ffffff;
  transition: 300ms;
  transform: translate(0, -50%);
`;

export const Inputs = styled.input<PropsGlobalStyle>`
  background: ${({ theme }) => theme.color.white};
  border-radius: 2px;
  padding: 10px;
  border: 1px solid ${(props) => props.value === "" ? `${PaletColors["primary-100"]}` : `${PaletColors["green"]}`};
  outline: none;
  margin: 5px 8px;
  width: 100%;
  &:hover{
    border: 1px solid ${({ theme }) => theme.color.grey300};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary500};
  }
  &:focus + ${Label} {
    top: -15px;
    padding: 0 3px;
    font-size: 14px;
    color: blue;
    transition: 300ms;
   }
  &:valid + ${Label}{
    top: 5px;
    text-align: left;
    padding: 0 3px;
    font-size:14px;
    color: #8d8d8d;
    margin: 0;
  }
  &:invalid {
    border: 1px solid ${({ theme }) => theme.color.red};
  }
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  }
  ${({ theme }) => theme.mq.desktop} {
  background: ${({ theme }) => theme.color.white};
  border-radius: 2px;
  padding: 16px 20px;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  }
   max-width: 300px;
   width: 100%;
   padding-bottom: 10px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
   width: 300px;
  }
  `;

