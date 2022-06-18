import styled from 'styled-components';


export const FormWrapper = styled.section`
  align-items: flex-end;
  background: ${({ theme }) => theme.color.primary50};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  width: 90vw;
  ${({ theme }) => theme.mq.desktop} {
    height: 686px;
    max-width: 400;
    padding: 48px;
    width: 100%;
  };
  ${({ theme }) => theme.mq.bigDesktop} {
    height: 686px;
    padding: 48px;
    width: 664px;
  };
`;

export const HeaderForm = styled.div`
  min-width: 220px;
  width: 90vw;
  > h3 {
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.poppins};
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
    margin: 0 auto;
    padding: 20px 15px;
    text-align: left;
    width: 90vw;
   };
   ${({ theme }) => theme.mq.desktop} {
   width: 100%;
   > h3 {
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.poppins};
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
    text-align: left;
   };
  };
`;

export const NameDiv = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding-right: 25px;
  width: 100%;
  ${({ theme }) => theme.mq.desktop} {
    align-items: space-between
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  };
`;

export const AddressDiv = styled(NameDiv)`
`;

export const TextDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 5px;
  width: 100%;
    ${({ theme }) => theme.mq.desktop} {
      height: 200px;
      margin: 0 auto;
      max-width: 580px;
      width: 100%;
    };
`;

export const CheckDiv = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 8px;
  width: 100%;
  > div {
    height: 36px;
    width: 36px;
  };
  > p {
    color: ${({ theme }) => theme.color.grey900};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.xs};
    line-height: 20px;
    margin-left: 12px;
    padding-top: 5px;
    };
  ${({ theme }) => theme.mq.desktop} {
    margin: 20px 0;
  > p {
    line-height: 26px;
    margin-left: 12px;
    }
  }
`;

export const ButtonDiv = styled.div`
  bottom: 15px;
  margin-right: 8px;
  padding: 30px 0;
  position: relative;
`;
