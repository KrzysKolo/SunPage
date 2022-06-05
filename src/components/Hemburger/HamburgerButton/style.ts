import styled from 'styled-components';

export const HamburgerButtonWrapper = styled.div`
   align-items: center;
   border: 2px double ${({ theme }) => theme.color.primary700};
   border-radius: 2px;
   box-shadow: 1px 1px 5px ${({ theme }) => theme.color.primary800};
   cursor: pointer;
   display: flex;
   flex-direction: column;
   height: 30px;
   justify-content: center;
   width: 30px;
   > .burger {
      background: ${({ theme }) => theme.color.primary700};
      border-radius: 4px;
      box-shadow: box-shadow: 0 2px 4px ${({ theme }) => theme.color.grey50};
      height: 3px;
      width: 20px;
      ::before,
      ::after {
         background: ${({ theme }) => theme.color.primary700};
         box-shadow: 0 2px 4px ${({ theme }) => theme.color.grey50};
         content: "" ;
         height: 3px;
         position: absolute;
         transition: all .5s ease-in-out;
         width: 20px;
      }
      ::before {
         transform: translateY(-8px);
      }
      ::after {
         transform: translateY(8px);
      }
   }
   > .burger-click {
      ::before,
      ::after {
         background: ${({ theme }) => theme.color.primary700};
         box-shadow: 0 2px 4px ${({ theme }) => theme.color.grey50};
         content: "" ;
         height: 3px;
         position: absolute;
         transition: all .5s ease-in-out;
         width: 20px;
      }
      ::before {
         transform: rotate(45deg) translate(-9px, 5px);
        }
      ::after {
         transform: rotate(-45deg) translate(-5px, -9px);
      }
   }
}
`;