import React from 'react';
import { HamburgerButtonWrapper } from './style';

export type HamburgerButtonProps = {
  click: boolean;
  onClick: () => void;
}

const HamburgerButton:React.FC<HamburgerButtonProps> = ({  onClick, click }) => {

  return (
    <HamburgerButtonWrapper onClick={onClick}>
      <div className={click ? 'burger-click' : 'burger'}></div>
    </HamburgerButtonWrapper>
  )
}

export default HamburgerButton;