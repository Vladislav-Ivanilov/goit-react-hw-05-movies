import styled from 'styled-components';

//.color1 {color: #2b7bc8;}
//.color2 {color: #8a99dc;}
//.color3 {color: #c9b2e5;}
//.color4 {color: #ebceea;}
//.color5 {color: #f0e9f0;}

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  background-color: #2b7bc8;
  border: transparent;
  outline: transparent;
  color: #f0e9f0;
  font-weight: 400;
  font-size: 22px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 5px 10px;
  background-color: #2b7bc8;
  border: transparent;
  outline: transparent;
  color: #f0e9f0;
  font-weight: 400;
  font-size: 22px;
  border-left: solid 1px #f0e9f0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
