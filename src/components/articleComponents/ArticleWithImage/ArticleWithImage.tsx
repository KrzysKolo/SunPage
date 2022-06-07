import React from 'react';
import { TitleCategory } from '../../titleComponents';
import { ArticleWithImageWrapper, Text, TextDiv, ImageDiv, DateDiv, IconDiv, TextH4 } from './style';
import calendar from '../../../assets/svgs/Vector.svg';
import SmallTitleArticle from '../../titleComponents/SmallTitleArticle';

export type ArticleWithImageProps = {
  image: string,
  title: string,
  titleCategory: string,
  text: string,
  dateOfEntry: string
}

const ArticleWithImage:React.FC<ArticleWithImageProps> = ({ image, title, titleCategory, text, dateOfEntry }) => {

  return (
    <ArticleWithImageWrapper>
      <ImageDiv image={image} />
      <TextDiv>
        <TitleCategory text={titleCategory} />
        <SmallTitleArticle title={title} />
        <Text>{text}</Text>
      </TextDiv>
      <DateDiv>
        <IconDiv>
          <img src={calendar} alt='calendar ico' />
        </IconDiv>
        <TextH4>{dateOfEntry}</TextH4>
      </DateDiv>
    </ArticleWithImageWrapper>
  )
}

export default ArticleWithImage