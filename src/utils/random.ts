export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const noDuplicationRandomNum = (
  min: number,
  max: number,
  ballList: number[]
): number => {
  let getNum = randomNumber(min, max);
  while (ballList.includes(getNum)) {
    getNum = randomNumber(min, max);
  }
  return getNum;
};

export const createRandomNumList = (
  min: number,
  max: number,
  length: number
) => {
  const randomNumList = [...Array(length)]
    .map(() => randomNumber(min, max));
  return Array.from(randomNumList);
};

export const createNoDuplicationRandomNumberList = (
  min: number,
  max: number,
  size: number
) => {
  const createNoDuplicationRandomNumList = (): number[] => {
    const noDuplicationRandomNumList:number[] = [];
    while (noDuplicationRandomNumList.length < size) {
      noDuplicationRandomNumList.push(randomNumber(min, max));
    }
    return noDuplicationRandomNumList;
  };
  const list = createNoDuplicationRandomNumList();
  return list;
};
