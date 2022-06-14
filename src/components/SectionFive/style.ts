import styled from 'styled-components';

export const Section = styled.section`
background: ${({ theme }) => theme.color.beige};
padding-bottom: 128px;
`;

export const SectionFiveWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.grey900};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 80px;
  width: 90vw;
  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;
    max-width: 1360px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 0 auto;
    max-width: 1360px;
  };
`;

export const TextH3 = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  width: 90vw;
  ${({ theme }) => theme.mq.tablet} {
    width: 30vw;
    min-367px;
  };
`;

export const TextP = styled(TextH3)`
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;
  `;

export const TextH2 = styled(TextH3)`
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
`;