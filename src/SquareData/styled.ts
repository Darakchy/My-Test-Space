import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 40px;
  margin: 10px;
  border: 2px solid #f4f4f4;
  font-weight: bold;

  .header {
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 10px;
  }

  .text1 {
    padding: 15px;
    color: #898989;
    background-color: #f4f4f4;
    font-size: 18px;
  }

  .title2 {
    padding: 15px;
    color: #faa351;
    background-color: #feeee0;
    font-size: 18px;
  }

  .title {
    font-size: 28px;
    margin: 25px 0;
  }

  .data {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .label {
    margin: 5px 0;
    font-size: 20px;
  }

  .numer {
    text-align: end;
    margin: 5px 0;
    font-size: 20px;
  }

  .earn-color {
    color: #94dc8e;
  }

  .backfire-color {
    color: #fb998b;
  }
`;
