import React from 'react';
import { ArticleWithImage } from '../articleComponents';
import Button from '../Button';
import { Section, SectionFourWrapper, HeaderDiv, ArticleWrapper } from './style';
import image4 from '../../assets/images/Image4.jpg';

const SectionFour = () => {
  return (
    <Section>
      <SectionFourWrapper>
        <HeaderDiv>
          <h2>Blog</h2>
          <Button btnText='Zobacz więcej' btnLink='/' outLine='outLine' />
        </HeaderDiv>
        <ArticleWrapper>
          <ArticleWithImage
            image={image4}
            title='Intrygujący tytuł artykułu do przeczytania przez użytkownika'
            subTitle='Kategoria'
            text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.'
            dateOfEntry='13.12.2021' />
        </ArticleWrapper>



      </SectionFourWrapper>
    </Section>
  )
}

export default SectionFour;