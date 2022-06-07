import styled from 'styled-components';
import { PropsGlobalStyle } from '../../../assets/styles/GlobalStyles';

export const ArticleWithImageWrapper = styled.article`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 10px;
  :nth-child(odd) {
    background: ${({ theme }) => theme.color.primary50};
  }
  ${({ theme }) => theme.mq.desktop} {
    :nth-child(odd) {
    background: transparent;
    }
  }
`;

export const TextDiv = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: center;
  padding: 12px 0;
  width: 300px;
  ${({ theme }) => theme.mq.phone} {
    height: 180px;
    width: 432px;
   }
  ${({ theme }) => theme.mq.tablet} {
    height: 180px;
    width: 300px;
   }
  ${({ theme }) => theme.mq.bigDesktop} {
    height: 180px;
    width: 432px;
   }
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
  height: 180px;
  margin: 0;
  padding: 0
  width: 300px;
 ${({ theme }) => theme.mq.phone} {
   height: 300px;
   width: 432px;
   }
  ${({ theme }) => theme.mq.desktop} {
    height: 300px;
    width: 300px;
   }
  ${({ theme }) => theme.mq.bigDesktop} {
    height: 300px;
    width: 432px;
   }
`;

export const DateDiv = styled.div`
  display: flex;
  align-items: center;
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