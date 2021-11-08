import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  title: string;
  onClick: () => void;
}
const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  background-color: #eeeeaa;
  color: #444342;
  text-decoration: none;
  font-weight: bold;
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-bottom: 4px solid #caca98;
  border-radius: 4px;
  letter-spacing: 10px;
  cursor: pointer;
`;

// const 不変
const Button:React.FC<ButtonProps> = (props:ButtonProps) => {
  const {
    title,
    onClick
  } = props;
  return (
    <StyledButton onClick={onClick}>
        {title}
    </StyledButton>
  );
};

export { Button };
