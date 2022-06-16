import React from 'react';
import { CarouselWrapper, ImageDiv, TextH3, TextH4 } from './styled';
import { TextDiv } from '../textDivComponents';

const Carousel = ({ item }: any) => {

  return (
    <CarouselWrapper>
      <TextDiv
        text={item.description}
      />
      <ImageDiv>
        <img src={item.image} alt={item.title} />
      </ImageDiv>
      <TextH3>{item.title}</TextH3>
      <TextH4>{item.subtitle}</TextH4>
    </CarouselWrapper>
  )
}

export default Carousel;