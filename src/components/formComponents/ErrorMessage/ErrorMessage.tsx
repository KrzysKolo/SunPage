import React from 'react';
import { ErrorMessageWrapper } from './style';

export type ErrorMessageProps = {
  message: string;
};

const ErrorMessage:React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <ErrorMessageWrapper>
      {message}
    </ErrorMessageWrapper>
  )
}

export default ErrorMessage;