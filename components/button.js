import React from 'react';
import styled from 'styled-components';

const Button = ({title, click}) => {
  return (
    <Buttons onClick={click}>
      <span>{title}</span>
    </Buttons>
  );
};

export default Button;

const Buttons = styled.button`
  border:20px solid orange;

  margin: 5rem;
  width:20rem;
  height: 20rem;
  background-color: #6e827f;
  color: ${props => props.theme.colors.titleColor}; 
  border-radius: 8px;
  cursor: pointer;
  
  span{
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
