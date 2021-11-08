import React from 'react';
import styled from '@emotion/styled';
import { Cell } from '../cell';

interface CardProps{
  cardNumberList: number[][];
  patchList?: number[];
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
    cardNumberList,patchList
  } = props;
  const isBlanked = (val :number) => patchList?.includes(val);
  return (
    <StyledCard>
      <tbody>
      {cardNumberList.map((li, i) => {
        return (<tr key={i}>{
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
