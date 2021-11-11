import { createNoDuplicationRandomNumberList } from './random';

export const createRandomCardNumList = (size: number) => {
  const randomNumList: number[][] = [...Array(size)].map(
    (val, idx, colList) => {
      return (colList = createNoDuplicationRandomNumberList(
        idx * 15 + 1,
        (idx + 1) * 15,
        size
      ));
    }
  );
  // 中心FREE=0 縦の判定に使う
  const centerFreeNumList = randomNumList.map((colVals, colIdx) => {
    const centerFreeList = colVals.map((val, idx) => {
      if (colIdx === 2 && idx === 2) {
        return 0;
      } else {
        return val;
      }
    });
    return centerFreeList;
  });
  // 行列入れ替え 横の判定に使う
  const cardNumList = centerFreeNumList.map((colVals, colIdx, numList) => {
    return colVals.map((val, idx) => numList[idx][colIdx]);
  });
  return { cardNumList, centerFreeNumList };
};
