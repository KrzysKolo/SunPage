import React from 'react';
import { Container } from '../../assets/styles/styles';
import { HomeHeader, SectionOne } from '../../components';

const Home = () => {
  return (
    <main>
      <Container>
        <HomeHeader />
        <SectionOne />
      </Container>
    </main>
  )
}

export default Home;