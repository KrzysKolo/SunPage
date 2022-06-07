import styled from 'styled-components';
import { TextP } from '../ArticleWithButton/style'

export const ArticleWithImageWrapper = styled.article`

`;

export const TextDiv = styled.div`
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    width: 548px;
    height: 548px;
    padding-right: 200px
  }
`;
export const Text = styled(TextP)``;
export const ImageDiv = styled.div``;
export const DateDiv = styled.div``;
export const IconDiv = styled.div``;
export const TextH4 = styled.h4``;