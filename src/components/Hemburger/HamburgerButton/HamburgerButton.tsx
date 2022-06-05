import React, { useState } from 'react';
import { HamburgerButtonWrapper } from './style'

const HamburgerButton = () => {
  const [click, setClick] = useState(false);
  const hangeButton = () => {
    setClick(!click)
    console.log("Aasasas");
  }
  return (
    <HamburgerButtonWrapper onClick={hangeButton}>
      <div className={click ? 'burger-click' : 'burger'}></div>
    </HamburgerButtonWrapper>
  )
}

export default HamburgerButton;