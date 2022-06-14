import React from 'react';
import { TextAreaWrapper } from './style';

export type TextAreaProps = {
  placeholder: string;
};

const TextArea:React.FC<TextAreaProps> = ({ placeholder }) => {
  return (
    <TextAreaWrapper placeholder={placeholder} />
  )
}

export default TextArea;