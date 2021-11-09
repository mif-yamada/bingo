import { createNoDuplicationSortRandomNumList } from './random';

export const createRandomCardNumList = () => {
  const size = 5;
  const randomNumList:number[][] = [...Array(5)].map((val, idx, colList) => {
    colList = createNoDuplicationSortRandomNumList(idx * 15 + 1, (idx + 1) * 15, 5);
    return colList;
  });

  //行列入れ替え、中心FREE
  const cardNumList= randomNumList.map((colVals, colIdx, numList) => {
    const rowVals = colVals.map((val, idx)=>{
      if (colIdx === 2 && idx === 2) {
        return val = 0;
      } else {
        return val = numList[idx][colIdx];
      }
    });
    return rowVals;
  })
  return cardNumList;
};
