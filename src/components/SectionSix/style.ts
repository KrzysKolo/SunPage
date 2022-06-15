import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  padding: 64px 0;
  ${({ theme }) => theme.mq.tablet} {
    padding: 128px 0;
  };
`
export const SectionSixWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem;
  width: 90vw;
  ${({ theme }) => theme.mq.phone} {
   padding: 30px;
  };
  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
  };
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
  };
`;
export const FormDiv = styled.div`
   ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    height: 687px;
    min-width: 400px;
    border-radius: 8px;
   }
`;

export const ImageDiv = styled.div`
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    height: 686px;
    min-width: 450px;
    display: inline-block;
    border-radius: 8px;

    > img {
      border-radius: 8px;
      height: 100%;
      width: 100%;
      object-fit: cover;
   }
  ${({ theme }) => theme.mq.bigDesktop} {
    height: 686px;
    width: 664px;
   }
`;


