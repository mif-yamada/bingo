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
}

export const createNoDuplicationSortRandomNumList = (min: number, max: number) => {
  const size = 5;
  const numList= [...Array(size)].map(index => index + 1);
  const callCreateRandomNumList = (length: number) => createRandomNumberList(min, max, length);
  //Sizeに足りない要素を加える
  const joinRandomNumList = (array: number[], joinElementNum: number) => {
    const joinList = callCreateRandomNumList(joinElementNum);
    return Array.from(new Set([...array, ...joinList]));
  }
  const initNumList = callCreateRandomNumList(size);
  const createNoDuplicationRandomNumList = ():number[] => {
    const noDuplicationRandomNumList = joinRandomNumList(initNumList,size-initNumList.length);
    if (size !== noDuplicationRandomNumList.length) {
      return createNoDuplicationRandomNumList();
    }
    return noDuplicationRandomNumList;
  }
  const list = Array.from(createNoDuplicationRandomNumList());
  return list;
}

export const createRandomCardNumList = () => {
  const colNumbersB = createNoDuplicationSortRandomNumList(1, 15);
  const colNumbersI = createNoDuplicationSortRandomNumList(16, 30);
  const colNumbersN = createNoDuplicationSortRandomNumList(31, 45);
  const colNumbersG = createNoDuplicationSortRandomNumList(45, 60);
  const colNumbersO = createNoDuplicationSortRandomNumList(61, 75);

  const colNumList = () => {
  }
}
