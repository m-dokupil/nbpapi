import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #ecf0f1;
    color: #2c3e50;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media screen and (max-width: 768px) {
    th, td {
      padding: 0.5rem;
    }
  }
`;
