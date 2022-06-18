import React from 'react';
import { ErrorMessageWrapper } from './style';

export type ErrorMessageProps = {
  error: string;
};

const ErrorMessage:React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <ErrorMessageWrapper>
      {error}
    </ErrorMessageWrapper>
  )
}

export default ErrorMessage;