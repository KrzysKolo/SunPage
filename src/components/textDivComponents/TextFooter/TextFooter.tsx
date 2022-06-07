import React from 'react';
import { TextFooterWrapper } from './style';

export type TextFooterProps = {
  text: string;
};

const TextFooter: React.FC<TextFooterProps> = ({ text }) => {
  return (
    <TextFooterWrapper>
     {text}
    </TextFooterWrapper>
  )
}

export default TextFooter;