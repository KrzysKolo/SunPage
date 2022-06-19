import React from 'react';
import { ArticleWithImage } from '../articleComponents';
import Button from '../Button';
import { Section, SectionFourWrapper, HeaderDiv, ArticleWrapper, ArticleMask } from './style';
import image4 from '../../assets/images/Image4.jpg';
import image5 from '../../assets/images/Image5.jpg';
import image6 from '../../assets/images/Image6.jpg';

const SectionFour = () => {
  return (
    <Section>
      <SectionFourWrapper>
        <HeaderDiv>
          <h2>Blog</h2>
          <Button btnText='Zobacz więcej' btnLink='/' outLine='outLine' />
        </HeaderDiv>
        <ArticleMask>
          <ArticleWrapper>
            <ArticleWithImage
              image={image4}
              title='Intrygujący tytuł artykułu do przeczytania przez użytkownika'
              titleCategory='Kategoria'
              text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.'
              dateOfEntry='13.12.2021' />
            <ArticleWithImage
              image={image5}
              title='Intrygujący tytuł artykułu do przeczytania przez użytkownika'
              titleCategory='Kategoria'
              text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.'
              dateOfEntry='13.12.2021' />
            <ArticleWithImage
              image={image6}
              title='Intrygujący tytuł artykułu do przeczytania przez użytkownika'
              titleCategory='Kategoria'
              text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.'
              dateOfEntry='13.12.2021' />
            </ArticleWrapper>
        </ArticleMask>
       </SectionFourWrapper>
    </Section>
  )
}

export default SectionFour;