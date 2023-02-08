import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//.color1 {color: #2b7bc8;}
//.color2 {color: #8a99dc;}
//.color3 {color: #c9b2e5;}
//.color4 {color: #ebceea;}
//.color5 {color: #f0e9f0;}

export const Header = styled.header`
  background-color: #2b7bc8;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const BarList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const BarLink = styled(NavLink)`
  display: block;
  padding: 8px 14px;
  font-weight: 700;
  font-size: 22px;
  border-radius: 10px;
  transition: all 200ms ease-in-out;
  color: #f0e9f0;

  text-decoration: none;

  &.active {
    color: #2b7bc8;
    background-color: #f0e9f0;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #2b7bc8;
    background-color: #f0e9f0;
  }
  :focus {
    background-color: #f0e9f0;
    outline: transparent;
  }
`;
