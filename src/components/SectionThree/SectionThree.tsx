import React from 'react';
import { SubTitleSection, TitleSection } from '../titleComponents';
import { SectionThreeWrapper, IconDiv, ArrowTextDiv, Section } from './style';
import quote from './../../assets/svgs/Quote.svg';

import Carousel from '../Carousel';
import ArrowButton from '../arrowButton';
import arrowLeft from '../../assets/svgs/IconButtonLeft.svg';
import arrowRight from '../../assets/svgs/IconButtonRight.svg';
import { carouselItems } from '../../helpers/CarouselData';

const SectionThree = () => {
  console.log(carouselItems)
  let CarouselItems = carouselItems.map(item => <Carousel key={item.id} item={item} />);
  const changeInRight = () => {
    console.log('klikam w prawo');
  };
  const changeInLeft = () => {
    console.log('klikam w w lewo');
  };
  return (
    <Section>
      <SectionThreeWrapper>
        <SubTitleSection title='Referencje' />
        <TitleSection title='Poznaj opinie naszych klientów' />
        <IconDiv>
          <img src={quote} alt='Rekomendacje' />
        </IconDiv>
        <ArrowTextDiv>
          <ArrowButton image={arrowLeft} onClick={changeInLeft} />
            {CarouselItems}
          <ArrowButton image={arrowRight} onClick={changeInRight} />
        </ArrowTextDiv>
     </SectionThreeWrapper>
    </Section>
  )
}

export default SectionThree;