import React, { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import { InputWrapper, Label, Inputs } from './style';

export type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  id: string;
  onChange: React.MouseEventHandler<HTMLElement> | any;
  error: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, value, id, onChange, error }) => {
  console.log(value)


  return (
    <InputWrapper>
      <Inputs type={type} placeholder={placeholder} value={value} id={id} onChange={onChange}  />
      { value !== "" ? <Label htmlFor={id} >{placeholder}</Label> : "" }
      { error !== "" ? <ErrorMessage error={error} /> : "" }
    </InputWrapper>
  )
}

export default Input;