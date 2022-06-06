import React from 'react';
import { SubTitleSectionWrapper } from './style';

export type SubTitleSectionProps = {
  title: string;
}
const SubTitleSection:React.FC<SubTitleSectionProps> = ({ title }) => {
  return (
    <SubTitleSectionWrapper>{title}</SubTitleSectionWrapper>
  )
}

export default SubTitleSection;