import React from 'react';
import { InputWrapper, Label, Inputs } from './style';

export type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  id: string;
  onChange: React.MouseEventHandler<HTMLElement> | any;
}

const Input: React.FC<InputProps> = ({ placeholder, type, value, id, onChange }) => {
  console.log(value)
  return (
    <InputWrapper>
      <Inputs type={type} placeholder={placeholder} value={value} id={id} onChange={onChange}  />
      {value !== "" ? <Label htmlFor={id} >{placeholder}</Label> : ""}
    </InputWrapper>
  )
}

export default Input;