import React from 'react';
import { Container } from '../../assets/styles/styles';
import { SubTitleSection, TitleSection } from '../titleComponents';
import { ArticleWithIcon } from '../articleComponents/';
import { SectionOneWrapper, TitleWrapper, SectionContainer, ArticleWrapper } from './style';
import icon1 from '../../assets/svgs/Icon.svg';

const SectionOne = () => {
  return (
    <SectionOneWrapper>
      <Container>
        <SectionContainer>
          <TitleWrapper>
            <SubTitleSection title='Overline' />
            <TitleSection title='Nagłówek w kilku słowach' />
          </TitleWrapper>
          <ArticleWrapper>
            <ArticleWithIcon title='Nagłówek w kilku słowach' image={icon1} text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.' />
            <ArticleWithIcon title='Nagłówek w kilku słowach drugi' image={icon1} text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.' />
            <ArticleWithIcon title='Nagłówek w kilku słowach trzeci' image={icon1} text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.' />
          </ArticleWrapper>
        </SectionContainer>
      </Container>
    </SectionOneWrapper>
  )
}

export default SectionOne;