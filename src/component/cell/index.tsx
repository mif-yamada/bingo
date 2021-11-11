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
  color:#fef6de;
`;
const StyleCellFrame = styled(StyledCell)`
  border: solid 1px;
  border-radius: 40px 40px 2px 2px;
  border-color: rgb(65, 75, 141);
`;
const StyleCellIsBlank = styled(StyleCellFrame)`
  background-color: rgb(65, 75, 141);
`;


const Cell: React.FC<CellProps> = (props: CellProps) => {
  const {
    num,
    isBlank
  } = props;
  const strNum = num === 0 ? "FREE" : num;
  return isBlank ? (
    <StyleCellIsBlank>{strNum}</StyleCellIsBlank>
  ) : (
    <StyleCellFrame>{strNum}</StyleCellFrame>
  );
};

export { Cell };
