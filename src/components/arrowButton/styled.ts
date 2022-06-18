import styled from 'styled-components';

export const ArrowButtonWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.white};;
  border: 1px solid ${({ theme }) => theme.color.grey100};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: center;
  margin-bottom: 75px;
  transition: all .3s easy-in-out;
  width: 40px;
  z-index: 999999;
  :hover {
    background: ${({ theme }) => theme.color.primary100};
  };
  :active {
    background: ${({ theme }) => theme.color.primary200};
  };
`;