import React from 'react';
import { TitleCategoryWrapper } from './style';

export type TitleCategoryProps = {
  text: string;
}

const TitleCategory:React.FC<TitleCategoryProps> = ({ text }) => {
  return (
    <TitleCategoryWrapper>{text}</TitleCategoryWrapper>
  )
}

export default TitleCategory;