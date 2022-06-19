import { Container, SectionSixWrapper, ImageDiv, FormDiv } from './style';
import image from '../../assets/images/Image2.jpg';
import Form from '../Form';

const SectionSix = () => {
  return (
    <Container>
      <SectionSixWrapper>
        <FormDiv>
          <Form />
        </FormDiv>
        <ImageDiv>
          <img src={image} alt="radośni ludzie" />
        </ImageDiv>
      </SectionSixWrapper>
    </Container>
  )
}

export default SectionSix;