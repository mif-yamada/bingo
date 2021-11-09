//ボールランダムとカードのランダム

//min max内からランダムで整数を一つ返す
export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//ボール用。
export const noDuplicationRandomNum = (min: number, max: number, array: number[]):number => {
  const getNum: number = randomNumber(min, max);
  if (array.includes(getNum)){
    return noDuplicationRandomNum(min, max, array);
  }
  return getNum;
}

export const createRandomNumberList = (min: number, max: number, length: number) => {
  const randomNumList = [...Array(length)].map(() => randomNumber(min, max));
  return Array.from(randomNumList);
  // return [1, 2, 3, 4, 5];
}

export const createNoDuplicationSortRandomNumList = (min: number, max: number, size:number) => {
  // const numList= [...Array(size)].map(index => index + 1);
  const callCreateRandomNumList = (length: number) =>
    createRandomNumberList(min, max, length);
  //Sizeに足りない要素を加える
  const joinRandomNumList = (array: number[], joinElementNum: number) => {
    const joinList = callCreateRandomNumList(joinElementNum);
    return Array.from(new Set([...array, ...joinList]));
  };

  //ここでダブりを排除
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
