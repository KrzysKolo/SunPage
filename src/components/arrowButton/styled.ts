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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    background: ${({ theme }) => theme.color.primary100};
  }
  :active {
    background: ${({ theme }) => theme.color.primary200};
  }
`;