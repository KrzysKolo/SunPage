import styled from 'styled-components';
import  PaletColors from '../../../assets/colors/PaletColors';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const InputWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  ${({ theme }) => theme.mq.desktop} {
    max-width: 300px;
    padding-bottom: 10px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 300px;
  };
`;

export const Label = styled.label`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.grey900};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: 12px;
  font-weight: 400;
  left: 15px;
  padding: 10px;
  position: absolute;
  top: 27px;
  transform: translate(0, -50%);
  transition: 300ms;
`;

export const Inputs = styled.input<PropsGlobalStyle>`
  border: 1px solid ${(props) => props.value === "" ? `${PaletColors["primary-100"]}` : `${PaletColors["green"]}`};
  border-radius: 2px;
  margin: 5px 8px;
  outline: none;
  padding: 10px;
  width: 100%;
  &:hover{
    border: 1px solid ${({ theme }) => theme.color.grey300};
  };
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary500};
  };
  &:focus + ${Label} {
    color: blue;
    font-size: 14px;
    padding: 0 3px;
    top: -15px;
    transition: 300ms;
   };
  &:valid + ${Label}{
    color: #8d8d8d;
    font-size:14px;
    margin: 0;
    padding: 0 3px;
    text-align: left;
    top: 5px;
  };
  &:invalid {
    border: 1px solid ${({ theme }) => theme.color.red};
  };
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  };
  ${({ theme }) => theme.mq.desktop} {
    margin: 5px 0;
    max-width: 274px;
    outline: none;
    padding: 16px 20px 10px 20px;
    width: 100%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
   width: 274px;
  };
  `;

