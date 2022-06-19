import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { WrapperBtn } from './style';

export type ButtonProps = {
  btnText: string;
  outLine?: string;
  btnLink: string;
  onClick?: MouseEventHandler<HTMLDivElement> | any;
};
const Button: React.FC<ButtonProps> = ({ btnText, outLine, btnLink, onClick }) => {
  return (
    <WrapperBtn outLine={outLine} >
      { btnLink !== ""
        ? (<Link className="button" to={btnLink}><span>{btnText}</span></Link>)
        : (<div className="button" onClick={onClick}>{btnText}</div>)
      }
    </WrapperBtn>
  )
}

export default Button;