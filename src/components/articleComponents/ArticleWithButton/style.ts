import styled from 'styled-components';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const ArticleWithButtonWrapper = styled.div<PropsGlobalStyle>`
  display: none;
  ${({ theme }) => theme.mq.tablet} {
    background: ${({ theme }) => theme.color.white};
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
    width: 90vw;
    margin: 5rem auto;
    flex-direction: ${(props) => props.side === "left" ? `row-reverse` : `row`};
  }
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1360px;
    width: 90%;
    margin: 4rem auto;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
    margin: 0 auto;
   }
`;

export const TextDiv = styled.div<PropsGlobalStyle>`
  display: none;
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 1.5rem;
    width: 50vw;
    padding-right: 5rem;
   }
  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    height: 50%;
    padding-right: ${(props) => props.side === "left" ? `5rem` : `0`};
    padding-left: ${(props) => props.side === "left" ? `0` : `5rem`};
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.side === "left" ? `flex-end` : `flex-start`};
    justify-content: center;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 548px;
    height: 548px;
    padding-right: 200px
  }
`;

export const ImageDiv = styled.div`
display: none;
${({ theme }) => theme.mq.tablet} {
  display: inline-block;
  width: 330px;
  height: 330px;
  object-fit: cover;
  border-radius: 8px;
  > img {
    width: 330px;
    height: 330px;
    border-radius: 8px;
  }
}
${({ theme }) => theme.mq.desktop} {
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 8px;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
}
${({ theme }) => theme.mq.bigDesktop} {
  width: 548px;
  height: 548px;
  object-fit: cover;
  border-radius: 8px;
  > img {
    width: 548px;
    height: 548px;
    border-radius: 8px;
  }
}
`;

export const TextP = styled.p`
  color: ${({ theme }) => theme.color.grey800};
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 400;
  line-height: 28px;
  margin-top: 20px;
  margin-bottom: 32px;
  `;

export const ArticleWithButtonWrapperSmall = styled.div`
background: ${({ theme }) => theme.color.white};
width: 100vw;
min-width: 315px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 3rem 2rem;
${({ theme }) => theme.mq.tablet} {
  display: none;
}
`;

export const TextImageDiv = styled.div`
display: flex;
flex-direction: column-reverse;
align-items: center;
> div {
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
}
> img {
  width: 180px;
  height: 180px;
  border-radius: 8px;
}
${({ theme }) => theme.mq.tablet} {
  display: none;
}
`;

export const TextButtonDiv = styled.div`
display: flex;
flex-direction: column;
padding: 0 3rem;
${({ theme }) => theme.mq.tablet} {
  display: none;
}
`;