export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const noDuplicationRandomNum = (
  min: number,
  max: number,
  ballList: number[]
): number => {
  const getNum: number = randomNumber(min, max);
  if (ballList.includes(getNum)) {
    return noDuplicationRandomNum(min, max, ballList);
  }
  return getNum;
};

export const createRandomNumList = (
  min: number,
  max: number,
  length: number
) => {
  const randomNumList = [...Array(length)].map(() => randomNumber(min, max));
  return Array.from(randomNumList);
};

export const createNoDuplicationRandomNumberList = (
  min: number,
  max: number,
  size: number
) => {
  const joinRandomNumList = (array: number[], joinElementNum: number) => {
    const joinList = createRandomNumList(min, max, joinElementNum);
    return Array.from(new Set([...array, ...joinList]));
  };
  const initNumList = Array.from(new Set(createRandomNumList(min, max, size)));
  const createNoDuplicationRandomNumList = (): number[] => {
    const noDuplicationRandomNumList = joinRandomNumList(
      initNumList,
      size - initNumList.length
    );
    if (size !== noDuplicationRandomNumList.length) {
      return createNoDuplicationRandomNumList();
    }
    return noDuplicationRandomNumList;
  };
  const list = createNoDuplicationRandomNumList();
  return list;
};
