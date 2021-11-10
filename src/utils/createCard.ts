import { createNoDuplicationSortRandomNumList } from './random';

export const createRandomCardNumList = () => {
  const size = 5;
  const randomNumList: number[][] = [...Array(5)].map((val, idx, colList) => {
    colList = createNoDuplicationSortRandomNumList(idx * 15 + 1, (idx + 1) * 15, 5);
    return colList;
  });
  //中心FREE=0　縦の判定に使う
  const centerFreeNumList = randomNumList.map((colVals, colIdx) => {
    const centerFreeList = colVals.map((val, idx) => {
      if (colIdx === 2 && idx === 2) {
        return val = 0;
      } else {
        return val;
      }
    });
    return centerFreeList;
  });
  //行列入れ替え 横の判定に使う
  const cardNumList = centerFreeNumList.map((colVals, colIdx, numList) => {
    const rowVals = colVals.map((val, idx) => {
      return (val = numList[idx][colIdx]);
    });
    return rowVals;
  });
  return {cardNumList,centerFreeNumList};
};
