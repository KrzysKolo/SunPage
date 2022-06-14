import React, { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import { createPropertySignature } from 'typescript';
import { CheckWrapper, Input, HiddenCheckbox, Icon } from './style';

export type CheckBoxProps = {
  checked: boolean ;
  onChange: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | any,
};

const CheckBox: React.FC<CheckBoxProps> = ({ checked, ...props}) => {
  return (
    <CheckWrapper {...props}>
      <HiddenCheckbox  checked={checked} {...props} />
      <Input checked={checked} {...props}  >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
        </Input>
  </CheckWrapper>
  )
}

export default CheckBox;