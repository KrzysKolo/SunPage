import React from 'react';
import { TextAreaWrapper, TextAreaBox, Label } from './style';

export type TextAreaProps = {
  placeholder: string;
  value: string;
  id: string;
  onChange: React.MouseEventHandler<HTMLElement> | any;
};

const TextArea:React.FC<TextAreaProps> = ({ placeholder, value, id, onChange }) => {
  return (
    <TextAreaWrapper>
      <TextAreaBox placeholder={placeholder} value={value} id={id} onChange={onChange} />
      {value !== "" ? <Label htmlFor={id}>{placeholder}</Label> : ""}
    </TextAreaWrapper>
  )
}

export default TextArea;