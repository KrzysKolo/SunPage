import React from 'react';
import {Container, FooterWrapper } from './style'
import { FooterInfo, FooterMenu } from '../footerComponents';


const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FooterMenu />
        <FooterInfo />
      </FooterWrapper>
    </Container>
  )
}

export default Footer