import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  display: inline-block;
  margin: 10px 20px;
  background-color: rgb(65, 75, 141);
  padding: 15px 25px;
  color: #f6f5d9;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  box-shadow: 0 5px 2px rgb(21, 45, 81);
  &:active {
    box-shadow: none;
    position: relative;
    top: 5px;
  }
`;

const Button:React.FC<ButtonProps> = (props:ButtonProps) => {
  const { title, onClick } = props;
  return (
    <StyledButton onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export { Button };
