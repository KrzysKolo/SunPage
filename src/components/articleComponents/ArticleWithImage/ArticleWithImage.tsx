import React from 'react';
import { SubTitleSection, TitleSection } from '../../titleComponents';
import { ArticleWithImageWrapper, Text, TextDiv, ImageDiv, DateDiv, IconDiv, TextH4 } from './style';

export type ArticleWithImageProps = {
  image: string,
  title: string,
  subTitle: string,
  text: string,
  dateOfEntry: string
}

const ArticleWithImage:React.FC<ArticleWithImageProps> = ({ image, title, subTitle, text, dateOfEntry }) => {
  return (
    <ArticleWithImageWrapper>
      <ImageDiv>
        <img src={image} alt='icon' />
      </ImageDiv>
      <TextDiv>
        <SubTitleSection title={subTitle} />
        <TitleSection title={title} />
        <Text>{text}</Text>
      </TextDiv>
      <DateDiv>
        <IconDiv></IconDiv>
        <TextH4>{dateOfEntry}</TextH4>
      </DateDiv>
    </ArticleWithImageWrapper>
  )
}

export default ArticleWithImage