import React from 'react';
import ErrorMessage from '../ErrorMessage';
import { TextAreaWrapper, TextAreaBox, Label } from './style';

export type TextAreaProps = {
  id: string;
  onChange: React.MouseEventHandler<HTMLElement> | any;
  placeholder: string;
  value: string;
  error: string;
};

const TextArea:React.FC<TextAreaProps> = ({ placeholder, value, id, onChange, error }) => {
  return (
    <TextAreaWrapper>
      <TextAreaBox placeholder={placeholder} value={value} id={id} onChange={onChange} />
      {value !== "" ? <Label htmlFor={id}>{placeholder}</Label> : ""}
      { error !== "" && <ErrorMessage error={error} /> }
    </TextAreaWrapper>
  )
}

export default TextArea;