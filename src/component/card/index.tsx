import React from 'react';
import styled from '@emotion/styled';
import { Cell } from '../cell';

interface CardProps{
  cardNumberList: number[][];
  ballNumList?: number[];
}

const StyledCard = styled.table`
  margin: 0 auto;
  width: 400px;
  height: 400px;
  background-color: #eefcff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card: React.FC<CardProps> = (props: CardProps) => {
  const {
    cardNumberList,ballNumList
  } = props
  const isBlanked = (val: number) => val===0||ballNumList?.includes(val);
  return (
    <StyledCard>
      <tbody>
        {cardNumberList.map((li, i) => {
        return (<tr key={li[i]}>{
            li.map((val: number, idx: number) => {
              return (
                <td key={val + idx}>
                  <Cell num={val} isBlank={isBlanked(val)}></Cell>
                </td>
              );
            })
        }</tr>
        );
      })}
      </tbody>
    </StyledCard>
  );
}

export {Card};
