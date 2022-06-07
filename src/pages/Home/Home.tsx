import React from 'react';
import { Container } from '../../assets/styles/styles';
import { HomeHeader, SectionOne, SectionThree, SectionTwo, SectionFour, SectionFive} from '../../components';

const Home = () => {
  return (
    <main>
      <Container>
        <HomeHeader />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Container>
    </main>
  )
}

export default Home;