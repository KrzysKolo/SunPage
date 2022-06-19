import React, { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import { InputWrapper, Label, Inputs } from './style';

export type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  id: string;
  onChange: React.MouseEventHandler<HTMLElement> | any;
  error: string | any;
  message: string | any;
  touched: string | any;
}

const Input: React.FC<InputProps> = ({ placeholder, type, value, id, onChange, error, message, touched }) => {
  console.log(value)

  return (
    <InputWrapper>
      <Inputs type={type} placeholder={placeholder} value={value} id={id} onChange={onChange}  />
      { value !== "" ? <Label htmlFor={id} >{placeholder}</Label> : "" }
      { error && touched &&  <ErrorMessage message={message} /> }
    </InputWrapper>
  )
}

export default Input;