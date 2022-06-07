import React from 'react';
import { ArticleWithButton } from '../articleComponents';
import { SectionTwoWrapper } from './style';
import image1 from './../../assets/images/Image1.jpg';
import image2 from './../../assets/images/Image2.jpg';
import image3 from './../../assets/images/Image3.jpg';

const SectionTwo = () => {
  return (

    <SectionTwoWrapper>
      <ArticleWithButton
        text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
        title='Usługa oferowana przez firmę'
        subTitle='Overline'
        image={image1}
        btnText='Skontaktuj się z nami'
        btnLink='/'
        altText='Image1'
        side=''
      />
      <ArticleWithButton
        text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
        title='Usługa oferowana przez firmę'
        subTitle='Overline'
        image={image2}
        btnText='Skontaktuj się z nami'
        btnLink='/'
        altText='Image1'
        side='left'
      />
      <ArticleWithButton
        text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
        title='Usługa oferowana przez firmę'
        subTitle='Overline'
        image={image3}
        btnText='Skontaktuj się z nami'
        btnLink='/'
        altText='Image1'
        side=''
      />
    </SectionTwoWrapper >
  )
}

export default SectionTwo;