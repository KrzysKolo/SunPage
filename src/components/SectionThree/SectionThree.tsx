import React, { useState } from 'react';
import { SubTitleSection, TitleSection } from '../titleComponents';
import { SectionThreeWrapper, IconDiv, ArrowTextDiv, Section, ArrowDiv, CarouselDiv } from './style';
import quote from './../../assets/svgs/Quote.svg';
import Carousel from '../Carousel';
import ArrowButton from '../arrowButton';
import arrowLeft from '../../assets/svgs/IconButtonLeft.svg';
import arrowRight from '../../assets/svgs/IconButtonRight.svg';
import { carouselItems } from '../../helpers/CarouselData';

const SectionThree = () => {
  const [current, setCurrent] = useState(0);
  const length = carouselItems.length;

  const changeInRight = () => {
    console.log('klikam w prawo');
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const changeInLeft = () => {
    console.log('klikam w w lewo');
    setCurrent(current === 0 ? (length - 1) : (current - 1));
  };
  console.log(current)

  if (!Array.isArray(carouselItems) || carouselItems.length <= 0) {
    return null;
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
          <ArrowDiv>
            <ArrowButton image={arrowLeft} onClick={changeInLeft} />
          </ArrowDiv>
          <CarouselDiv>
          { carouselItems.map((item, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                { index === current && <Carousel key={item.id} item={item} /> }
              </div>
              )
            })
            }
          </CarouselDiv>
          <ArrowDiv>
            <ArrowButton image={arrowRight} onClick={changeInRight} />
          </ArrowDiv>
        </ArrowTextDiv>
     </SectionThreeWrapper>
    </Section>
  )
}

export default SectionThree;