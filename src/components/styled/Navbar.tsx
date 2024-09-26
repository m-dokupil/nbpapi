import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
  color: #34495e;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
    color: white;
    background-color: #2980b9;
  }
`;
