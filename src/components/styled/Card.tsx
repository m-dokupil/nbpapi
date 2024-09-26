import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem 0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CardHeader = styled.h2`
  font-size: 1.25rem;
  color: #34495e;
  margin-bottom: 1rem;
`;

export const CardBody = styled.div`
  color: #7f8c8d;

  @media screen and (max-width: 768px) {
    .label {
      display: block;
    }
  }
`;
