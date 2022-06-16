import styled from 'styled-components';

export const ArrowButtonWrapper = styled.div`
  background: ${({ theme }) => theme.color.white};;
  border: 1px solid ${({ theme }) => theme.color.grey100};
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  margin-bottom: 75px;
  transition: all .3s easy-in-out;
  width: 40px;
  :hover {
    box-shadow: 1px 1px 6px ${({ theme }) => theme.color.grey500};;
  }
`;