import Button from '../Button';
import { Section, SectionFiveWrapper, TextH3, TextP, TextH2 } from './style';

const SectionFive = () => {
  return (
    <Section>
      <SectionFiveWrapper>
        <TextH3>Overline</TextH3>
        <TextH2>Przekonujący nagłówek w CTA</TextH2>
        <TextP>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</TextP>
        <Button btnText='Napisz do nas' btnLink='/' />
      </SectionFiveWrapper>
    </Section>
  )
}

export default SectionFive;