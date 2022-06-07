import React from 'react';
import { Container } from '../../assets/styles/styles';
import { HomeHeader, SectionOne, SectionThree, SectionTwo, SectionFour} from '../../components';

const Home = () => {
  return (
    <main>
      <Container>
        <HomeHeader />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </Container>
    </main>
  )
}

export default Home;