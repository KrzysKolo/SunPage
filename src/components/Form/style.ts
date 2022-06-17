import styled from 'styled-components';


export const FormWrapper = styled.section`
  background: ${({ theme }) => theme.color.primary50};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: space-between;
  align-items: flex-end;
   width: 90vw;
   margin: 0 auto;
   overflow: hidden;
  ${({ theme }) => theme.mq.desktop} {
    padding: 48px;
   height: 686px;
   max-width: 400;
   width: 100%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
   padding: 48px;
   width: 664px;
   height: 686px;
  }`;

export const HeaderForm = styled.div`
  width: 90vw;
  min-width: 220px;
  > h3 {
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.poppins};
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
    text-align: left;
    width: 90vw;
    margin: 0 auto;
    padding: 20px 15px;
   }
   ${({ theme }) => theme.mq.desktop} {
   width: 100%;
   > h3 {
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.poppins};
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
    text-align: left;
   }
  };

`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between
  };
`;

export const AddressDiv = styled(NameDiv)`

`;

export const TextDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
  ${({ theme }) => theme.mq.desktop} {
   max-width: 568px;
   width: 100%;
   height: 200px;
   margin: 0 auto;
  };
`;

export const CheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 8px;
  > div {
    height: 36px;
    width: 36px;
  }
  > p {
    padding-top: 5px;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: 400;
    line-height: 20px;
     }
  ${({ theme }) => theme.mq.desktop} {
    margin: 20px 0;
  > p {
    margin-left: 12px;
    line-height: 26px;
    }
  }
`;

export const ButtonDiv = styled.div`
position: relative;
bottom: 15px;
padding: 30px 0;
margin-right: 8px;
`;
