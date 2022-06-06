import React from 'react';
import { TitleSectionWrapper } from './style';

export type TitleSectionProps = {
  title: string;
}
const TitleSection:React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <TitleSectionWrapper>{title}</TitleSectionWrapper>
  )
}

export default TitleSection;