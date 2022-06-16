import React from 'react';
import { ArrowButtonWrapper } from './styled';

export type ArrowButtonProps = {
  image: string;
  onClick: () => void;
};
const ArrowButton:React.FC<ArrowButtonProps> = ({ image, onClick}) => {
  return (
    <ArrowButtonWrapper onClick={onClick}>
      <img src={image} alt="Arrow" />
    </ArrowButtonWrapper>
  )
}

export default ArrowButton;