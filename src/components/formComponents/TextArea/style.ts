import styled from 'styled-components';
import  PaletColors from '../../../assets/colors/PaletColors';

export const TextAreaWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  padding-right: 20px;
  position: relative;
  width: 99%;
  ${({ theme }) => theme.mq.desktop} {
    height: 200px;
    max-width: 600px;
  };
  ${({ theme }) => theme.mq.desktop} {
    height: 200px;
    width: 600px;
  };
`;

export const Label = styled.label`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.grey900};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: 12px;
  font-weight: 400;
  left: 15px;
  position: absolute;
  top: 27px;
  transform: translate(0, -50%);
  transition: 300ms;
`;

export const TextAreaBox = styled.textarea`
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${(props) => props.value === "" ? `${PaletColors["primary-100"]}` : `${PaletColors["green"]}`};
  border-radius: 2px;
  font-size: ${({ theme }) => theme.font.size.s};
  height: 100px;
  outline: none;
  margin: 0 8px;
  padding: 10px;
  width: 100%;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.grey300};
  };
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary500};
  };
  &:focus + ${Label} {
    color: blue;
    font-size: 14px;
    padding: 0 3px;
    top: 25px;
    transition: 300ms;
   };
  &:valid + ${Label}{
    color: #8d8d8d;
    font-size:14px;
    margin: 0;
    padding: 0 3px;
    text-align: left;
    top: 0px;
  };
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  };
  ${({ theme }) => theme.mq.tablet} {
    background: ${({ theme }) => theme.color.white};
    border-radius: 2px;
    height: 200px;
    outline: none;
    padding: 16px 20px;
  ::placeholder {
    color: ${({ theme }) => theme.color.grey700};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 400;
    line-height: 28px;
  };
  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
    width: 100%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    height: 100%;
    width: 100%;
  };
`;