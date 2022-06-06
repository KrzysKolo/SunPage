import React from 'react';
import { SmallTitleArticleWrapper } from './style';

export type TitleProps = {
  title: string;
}
const SmallTitleArticle:React.FC<TitleProps> = ({ title }) => {
  return (
    <SmallTitleArticleWrapper>{title}</SmallTitleArticleWrapper>
  )
}

export default SmallTitleArticle;