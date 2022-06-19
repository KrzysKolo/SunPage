import React from 'react';
import { SuccessMessageWrapper } from './style';

export type SuccessMessageProps = {
  success: string;
};

const SuccessMessage:React.FC<SuccessMessageProps> = ({ success }) => {
  return (
    <SuccessMessageWrapper>
      {success}
    </SuccessMessageWrapper>
  )
}

export default SuccessMessage;