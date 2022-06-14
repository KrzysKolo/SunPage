import React from 'react';
import { InputWrapper } from './style';

export type InputProps = {
  placeholder: string;
  type: string;
}

const Input:React.FC<InputProps> = ({ placeholder, type}) => {
  return (
    <InputWrapper type={type} placeholder={placeholder} />
  )
}

export default Input;