import { Container } from '../../assets/styles/styles';
import { HomeHeader, SectionOne, SectionThree, SectionTwo, SectionFour, SectionFive, SectionSix} from '../../components';

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
        <SectionSix />
      </Container>
    </main>
  )
}

export default Home;