import React from 'react';
import SmallTitleArticle from '../../titleComponents/SmallTitleArticle';
import { ArticleWithIconWrapper, IconDiv, TextDiv, TextP } from './style';

export type ArticleWithIconProps = {
  image: string;
  title: string;
  text: string;
};

const ArticleWithIcon:React.FC<ArticleWithIconProps> = ({ image, title, text }) => {
  return (
    <ArticleWithIconWrapper>
      <IconDiv>
        <img src={image} alt='icon' />
      </IconDiv>
      <TextDiv>
        <SmallTitleArticle title={title} />
        <TextP>{text}</TextP>
      </TextDiv>
    </ArticleWithIconWrapper>
  )
}

export default ArticleWithIcon;