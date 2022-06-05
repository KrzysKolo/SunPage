import React from 'react';
import { Link } from 'react-router-dom';
import { WrapperBtn } from './style';

export type ButtonProps = {
  btnText: string;
  outLine?: string;
  btnLink: string;
};
const Button: React.FC<ButtonProps> = ({ btnText, outLine, btnLink }) => {
  return (
    <WrapperBtn outLine={outLine}>
      <Link className="button" to={btnLink}><span>{btnText}</span></Link>
    </WrapperBtn>
  )
}

export default Button;