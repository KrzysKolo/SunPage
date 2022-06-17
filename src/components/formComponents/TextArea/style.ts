import styled from 'styled-components';
import  PaletColors from '../../../assets/colors/PaletColors';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const TextAreaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 99%;
  margin-top: 20px;
  padding-right: 20px;
  ${({ theme }) => theme.mq.desktop} {
    max-width: 600px;
    height: 200px;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 600px;
    height: 200px;
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

export const TextAreaBox = styled.textarea`
  background: ${({ theme }) => theme.color.white};
  border-radius: 2px;
  padding: 10px;
  font-size: ${({ theme }) => theme.font.size.s};
  border: 1px solid ${(props) => props.value === "" ? `${PaletColors["primary-100"]}` : `${PaletColors["green"]}`};
  outline: none;
  margin: 0 8px;
  width: 100%;
  height: 100px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.grey300};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary500};
  }
  &:focus + ${Label} {
    top: 25px;
    padding: 0 3px;
    font-size: 14px;
    color: blue;
    transition: 300ms;
   }
  &:valid + ${Label}{
    top: 0px;
    text-align: left;
    padding: 0 3px;
    font-size:14px;
    color: #8d8d8d;
    margin: 0;
  }
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  }
  ${({ theme }) => theme.mq.tablet} {
    background: ${({ theme }) => theme.color.white};
    padding: 16px 20px;
    border-radius: 2px;
    outline: none;
    height: 200px;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  }
  ${({ theme }) => theme.mq.desktop} {
   height: 100%;
   width: 100%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
   width: 100%;
   height: 100%;
  }
`;