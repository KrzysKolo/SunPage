import React from 'react';
import { Container } from '../../assets/styles/styles';
import { HomeHeader, SectionOne, SectionTwo } from '../../components';

const Home = () => {
  return (
    <main>
      <Container>
        <HomeHeader />
        <SectionOne />
        <SectionTwo />
      </Container>
    </main>
  )
}

export default Home;