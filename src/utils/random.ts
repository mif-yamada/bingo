//ボールランダムとカードのランダム

//min max内からランダムで整数を一つ返す
export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const createRandomNumberList = (min: number, max: number, length: number) => {
  const randomNumList = new Array(length).map(() => randomNumber(min, max));

}
