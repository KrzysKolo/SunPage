import styled from 'styled-components';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const ArticleWithButtonWrapper = styled.div<PropsGlobalStyle>`
  display: none;
  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: ${(props) => props.side === "left" ? `row-reverse` : `row`};
    justify-content: space-between;
    margin: 20px auto;
    max-width: 960px;
    width: 90vw;
  };
  ${({ theme }) => theme.mq.desktop} {
    margin: 20px auto;
    max-width: 1360px;
    width: 90%;
   };
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 1360px;
   };
`;

export const TextDiv = styled.div<PropsGlobalStyle>`
  display: none;
  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 5rem;
    width: 50vw;
    max-width: 548px;
    padding-right: ${(props) => props.side === "left" ? `5rem` : `0`};
    padding-left: ${(props) => props.side === "left" ? `0` : `0`};
   };
  ${({ theme }) => theme.mq.desktop} {
    align-items: ${(props) => props.side === "left" ? `flex-end` : `flex-start`};
    display: flex;
    flex-direction: column;
    height: 548px;
    justify-content: center;
    padding-right: ${(props) => props.side === "left" ? `5rem` : `0`};
    padding-left: ${(props) => props.side === "left" ? `1rem ` : `0`};
    width: 50%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    height: 548px;
    padding-right: 200px
    padding-right: ${(props) => props.side === "left" ? `5rem` : `0`};
    padding-left: ${(props) => props.side === "left" ? `0` : `0`};
    width: 548px;
  };
`;

export const ImageDiv = styled.div`
display: none;
${({ theme }) => theme.mq.tablet} {
  border-radius: 8px;
  display: inline-block;
  height: 100%;
  object-fit: cover;
  max-width: 548px;
  > img {
    border-radius: 8px;
    height: 330px;
    width: 330px;
  };
}
${({ theme }) => theme.mq.desktop} {
  border-radius: 8px;
  height: 548px;
  object-fit: cover;
  width: 548px;
  > img {
    border-radius: 8px;
    height: 548px;
    width: 548px;
    };
  };
};
${({ theme }) => theme.mq.bigDesktop} {
  border-radius: 8px;
  height: 548px;
  object-fit: cover;
  width: 548px;
  > img {
    border-radius: 8px;
    height: 548px;
    width: 548px;
  };
};
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
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 315px;
  padding: 3rem 2rem;
  width: 100vw;
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  };
`;

export const TextImageDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  > div {
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
  };
  > img {
    border-radius: 8px;
    height: 180px;
    width: 180px;
  };
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  };
`;

export const TextButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  };
`;