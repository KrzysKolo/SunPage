import React from 'react';
import Button from '../../Button';
import { SubTitleSection, TitleSection } from '../../titleComponents';
import { ArticleWithButtonWrapper, ArticleWithButtonWrapperSmall, TextDiv, ImageDiv, TextP, TextImageDiv, TextButtonDiv } from './style';

export type ArticleWithButtonProps = {
  text: string,
  title: string,
  subTitle: string,
  image: string,
  btnText: string,
  outLine?: string,
  btnLink: string,
  altText: string,
  side?: string,
};

const ArticleWithButton: React.FC<ArticleWithButtonProps> = ({
  text,
  title,
  subTitle,
  image,
  altText,
  btnText,
  btnLink,
  side }) => {

  return (
    <>
      <ArticleWithButtonWrapper side={side}>
        <TextDiv>
          <SubTitleSection title={subTitle} />
          <TitleSection title={title} />
          <TextP>{text}</TextP>
          <Button btnText={btnText} btnLink={btnLink} />
        </TextDiv>
        <ImageDiv>
          <img src={image} alt={altText} />
        </ImageDiv>
      </ArticleWithButtonWrapper>
      <ArticleWithButtonWrapperSmall>
        <TextImageDiv>
          <div>
            <SubTitleSection title={subTitle} />
            <TitleSection title={title} />
          </div>
          <img src={image} alt={altText} />
        </TextImageDiv>
        <TextButtonDiv>
          <TextP>{text}</TextP>
          <Button btnText={btnText} btnLink={btnLink} />
        </TextButtonDiv>
      </ArticleWithButtonWrapperSmall>
    </>
  )
}

export default ArticleWithButton;