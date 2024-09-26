import styled from 'styled-components';

export const ErrorMessage = styled.p`
  background-color: #fff0f0;
  border: 1px solid red;
  border-radius: 5px;
  padding: 15px;
  color: red;
  font-weight: bold;
  margin: 0.5rem;

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const ConversionOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  
  label {
    margin-right: 15px;
    font-weight: bold;
  }
  
  input[type="radio"] {
    margin-right: 5px;
  }
`;

export const MessageBox = styled.div`
  background-color: #f0f8ff;
  border: 1px solid #b0c4de;
  border-radius: 5px;
  padding: 15px;
  margin: 0.5rem;
  font-weight: bold;
  color: #333; 

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
