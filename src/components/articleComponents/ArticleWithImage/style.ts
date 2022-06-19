import styled from 'styled-components';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const ArticleWithImageWrapper = styled.article`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 5px;
  :nth-child(odd) {
    background: ${({ theme }) => theme.color.primary50};
  };
  ${({ theme }) => theme.mq.tablet} {
    margin: 0 20px;
    width: 472px;
    :nth-child(odd) {
    background: transparent;
    };
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 0;
    width: 432px;
   };
`;

export const TextDiv = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: center;
  padding: 12px 0;
  width: 100%;
  ${({ theme }) => theme.mq.phone} {
    height: 180px;
    max-width: 300px;
   };
  ${({ theme }) => theme.mq.tablet} {
    height: 180px;
    width: 432px;
   };
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.grey800};
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 400;
  line-height: 28px;
`;

export const ImageDiv = styled.div<PropsGlobalStyle>`
  background-image: ${(props) => props.image ? `url(${props.image})` : `url('../../../assets/images/errorSmall.jpg')`};
  background-position: center;
  border-radius: 8px;
  height: 100%;
  margin: 0;
  max-width: 300px;
  object-fit: cover;
  padding: 0
  width: 100%;
  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  };
 ${({ theme }) => theme.mq.phone} {
   height: 100%;
   max-width: 300px;
   > img {
     object-fit: cover;
     width: 100%;
   }
   };
 ${({ theme }) => theme.mq.tablet} {
   height: 320px;
   max-width: 432px;
   object-fit: cover;
   > img {
     object-fit: cover;
     width: 432px;
   }
  };
 ${({ theme }) => theme.mq.bigDesktop} {
   height: 320px;
   width: 432%;
   object-fit: cover;
   > img {
     object-fit: cover;
     width: 432px;
   }
  };
`;

export const DateDiv = styled.div`
  align-items: center;
  display: flex;
`;

export const IconDiv = styled.div`
  margin-right: 10px;
`;

export const TextH4 = styled.h4`
  color: ${({ theme }) => theme.color.grey600};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 500;
  line-height: 24px;
`;