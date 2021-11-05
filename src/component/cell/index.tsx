import React from "react";
import styled from "@emotion/styled";

interface CellProps{
  num: number;
  isBlank?:boolean;
}
const StyledCell = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleCellIsBlank = styled(StyledCell)`
  background-color: #f8e993;
`;

const StyleCellFrame = styled(StyledCell)`
  border: solid 1px;
  border-color: #f8e993;
`;

const Cell: React.FC<CellProps> = (props:CellProps) => {
  const {
    num,
    isBlank
  } = props;
  return (
    isBlank ?
      <StyleCellIsBlank>{ num }</StyleCellIsBlank> :
      <StyleCellFrame>{num}</StyleCellFrame>
  );
};

export { Cell };
