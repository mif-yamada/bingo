export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//ボール用。
export const noDuplicationRandomNum = (min: number, max: number, ballList: number[]):number => {
  const getNum: number = randomNumber(min, max);
  if (ballList.includes(getNum)){
    return noDuplicationRandomNum(min, max, ballList);
  }
  //TODO:
  // const initNumArray = [...Array(size)].map((val, idx) => idx + 1);
  // const getNum: number = randomNumber(min, max);

  // [Array(ballList.length+1)].
  return getNum;

}

export const createRandomNumberList = (min: number, max: number, length: number) => {
  const randomNumList = [...Array(length)].map(() => randomNumber(min, max));
  return Array.from(randomNumList);
}

export const createNoDuplicationSortRandomNumList = (min: number, max: number, size:number) => {
  const callCreateRandomNumList = (length: number) =>
  createRandomNumberList(min, max, length);
  //Sizeに足りない要素を加える
  const joinRandomNumList = (array: number[], joinElementNum: number) => {
    const joinList = callCreateRandomNumList(joinElementNum);
    return Array.from(new Set([...array, ...joinList]));
  };
  const initNumList = Array.from(new Set(callCreateRandomNumList(size)));
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
  const list = Array.from(createNoDuplicationRandomNumList());
  return list;
}
