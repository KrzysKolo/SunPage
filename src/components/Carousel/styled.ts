import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 0 20px;
  width: 90%;
`;

export const ImageDiv = styled.div`
  border-radius: 50%;
  height: 56px;
  margin: 40px auto 13px;
  object-fit: cover;
  width: 56px;
  > img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  };
`;

export const TextH3 = styled.h3`
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 2px;
`;

export const TextH4 = styled(TextH3)`
    color: ${({ theme }) => theme.color.grey700};
    font-size: ${({ theme }) => theme.font.size.s};
    line-height: 28px;
    margin-bottom: 2px;
`;