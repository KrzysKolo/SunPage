import React from 'react';
import { SubTitleSection, TitleSection } from '../titleComponents';
import { SectionThreeWrapper, IconDiv, ImageDiv, Section, TextH3, TextH4 } from './style';
import kowalski from './../../assets/images/KOWALSKI.jpg';
import quote from './../../assets/svgs/Quote.svg';
import { TextDiv } from '../textDivComponents';

const SectionThree = () => {
  return (
    <Section>
      <SectionThreeWrapper>
        <SubTitleSection title='Referencje' />
        <TitleSection title='Poznaj opinie naszych klientów' />
        <IconDiv>
          <img src={quote} alt='Rekomendacje' />
        </IconDiv>
        <TextDiv
          text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
        />
        <ImageDiv>
          <img src={kowalski} alt='Jan Kowalski' />
        </ImageDiv>
        <TextH3>Jan Kowalski</TextH3>
        <TextH4>Firma Jana Kowalskiego</TextH4>
      </SectionThreeWrapper>
    </Section>
  )
}

export default SectionThree;