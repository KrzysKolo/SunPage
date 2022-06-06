import React from 'react';
import { HomeHeaderWrapper, ImgDiv, HeaderDiv } from './style';
import imageSmall from '../../../assets/images/ImageSmall.jpg';
import imageBig from '../../../assets/images/Image.jpg';
import Button from '../../Button';

const HomeHeader:React.FC = () => {
  return (
    <HomeHeaderWrapper>
      <HeaderDiv>
        <div>
          <h1>
            Nagłówek traktujący o działalności firmy
          </h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
          </p>
          <div className='btn'>
            <Button btnText="Dowiedz się więcej" btnLink='/' />
          </div>
        </div>
      </HeaderDiv>
      <ImgDiv>
        <img src={imageSmall} alt='Image' className='small' />
        <img src={imageSmall} alt='Image' className='big'/>
        <div>
          <h1>
            Nagłówek traktujący o działalności firmy
          </h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
          </p>
          <div className='btn'>
            <Button btnText="Dowiedz się więcej" btnLink='/' />
          </div>
        </div>
      </ImgDiv>
    </HomeHeaderWrapper>
  )
}

export default HomeHeader;
