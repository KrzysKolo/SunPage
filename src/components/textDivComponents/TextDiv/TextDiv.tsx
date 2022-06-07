import React from 'react';
import { TextDivWrapper } from './style';

export type TextDivProps = {
  text: string;
};
const TextDiv:React.FC<TextDivProps> = ({ text }) => {
  return (
    <TextDivWrapper>{text}</TextDivWrapper>
  )
}

export default TextDiv;